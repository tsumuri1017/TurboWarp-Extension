const Room = require('./Room');
const address = require('./address');
const {parseUsername} = require('./username');
const logger = require('./logger');

class Client {
  constructor(ws, req) {
    this.ws = ws;
    this.ip = address.getAddress(req);
    this.room = null;
    this.username = '';
    this.connectedAt = Date.now();
    this.respondedToPing = true;
    this.logPrefix = '[]';
    this.updateLogPrefix();
  }
  updateLogPrefix() {
    this.logPrefix = '[' + this.ip;
    if (this.username !== '') {
      this.logPrefix += ' "' + this.username + '"';
    }
    if (this.room !== null) {
      this.logPrefix += ' in ' + this.room.id;
    }
    this.logPrefix += ']';
  }
  log(message) {
    logger.info(this.logPrefix + ' ' + message);
  }

  warn(message) {
    logger.warn(this.logPrefix + ' ' + message);
  }
  error(message) {
    logger.error(this.logPrefix + ' ' + message);
  }
  send(data) {
    if (this.ws === null) {
      this.log('Cannot send message; ws is null');
      return;
    }
    if (this.ws.readyState !== this.ws.OPEN) {
      this.log('Cannot send message; readyState ' + this.ws.readyState);
      return;
    }
    this.ws.send(data);
  }


  close(code) {
    if (this.ws !== null) {
      this.ws.close(code);
      this.ws = null;
    }
    if (this.room) {
      this.room.removeClient(this);
      this.room = null;
    }
  }

  setRoom(room) {
    if (this.room !== null) {
      throw new Error('Already joined a room');
    }
    room.addClient(this);
    this.room = room;
    this.updateLogPrefix();
  }

  setUsername(username) {
    this.username = parseUsername(username);
    this.updateLogPrefix();
  }
  ping() {
    this.respondedToPing = false;
    if (this.ws !== null) {
      this.ws.ping();
    }
  }

  timedOut() {
    if (this.ws !== null) {
      // terminate will then run the proper onclose handlers
      this.ws.terminate();
    } else {
      this.log('Timed out but not connected?');
    }
    this.log('Timed out');
  }
}

module.exports = Client;
