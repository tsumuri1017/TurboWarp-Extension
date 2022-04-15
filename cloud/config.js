module.exports = {
  port: process.env.PORT || 9080,
  unixSocketPermissions: 0o777,
  trustProxy: process.env.TRUST_PROXY === 'true',
  anonymizeAddresses: process.env.ANONYMIZE_ADDRESSES === 'true',
  anonymizeGeneratedUsernames: true,
  perMessageDeflate: false,
  bufferSends: 60,
  enableRename: false,
  enableDelete: false,
  logging: {
    console: true,
    rotation: {
      filename: '%DATE%.log',
      dirname: process.env.LOGS_DIRECTORY || 'logs',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '7d',
      createSymlink: true,
    },
  },
};
