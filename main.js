class S_REGEX{
constructor() {}
getInfo(){return　{
id:'regex',
name:'Tsumuri1017\n拡張機能',
blockIconURI:"https://lazuceleste.herokuapp.com/イレイナ.jpg",
menuIconURI:"https://lazuceleste.herokuapp.com/icons/tsumuri1017.jpeg",
blocks:[
      {opcode:'exponential',
   blockType:Scratch.BlockType.REPORTER,
   text:'[NUMBER]^[SUBNUMBER]',
   arguments:{
     NUMBER:{type:Scratch.ArgumentType.STRING,defaultValue:"2"},
      SUBNUMBER:{type:Scratch.ArgumentType.STRING,defaultValue:"10"}
   }
  },
  {opcode:'factorial',
   blockType:Scratch.BlockType.REPORTER,
   text:'[number]!',
   arguments:{
     number:{type:Scratch.ArgumentType.STRING,defaultValue:"10"}
   }
  },
    {opcode:'calculation',
   blockType:Scratch.BlockType.REPORTER,
   text:'[math]を計算',
   arguments:{
     math:{type:Scratch.ArgumentType.STRING,defaultValue:"1+1"}
   }
  },
  {opcode:'encodeURI',
   blockType:Scratch.BlockType.REPORTER,
   text:'[TEXT]をURLエンコードする',
   arguments:{
     TEXT:{type:Scratch.ArgumentType.STRING,defaultValue:"魔女の旅々"}
   }
  },
  {opcode:'decodeURI',
   blockType:Scratch.BlockType.REPORTER,
   text:'[TEXT]をURLデコードする',
   arguments:{
     TEXT:{type:Scratch.ArgumentType.STRING,defaultValue:"%E7%8C%AB"}
   }
  },
      {opcode:'useragent',
   blockType:Scratch.BlockType.REPORTER,
   text:'ユーザーエージェント',
  },
        {opcode:'nowUTC',
   blockType:Scratch.BlockType.REPORTER,
   text:'UTC時刻',
  },
  {opcode:'getWWWdata',
   blockType:Scratch.BlockType.REPORTER,
   text:'[url]を取得',
   arguments:{
     url:{type:Scratch.ArgumentType.STRING,defaultValue:"https://tsumuri.f5.si"}
   }
  },
  
    {opcode:'getUserDataID',
   blockType:Scratch.BlockType.REPORTER,
   text:'[username]のユーザーID',
   arguments:{
     username:{type:Scratch.ArgumentType.STRING,defaultValue:"tsumuri3"}
   }
  },
  {opcode:'getUserMessagesCount',
   blockType:Scratch.BlockType.REPORTER,
   text:'[username]の未読件数',
   arguments:{
     username:{type:Scratch.ArgumentType.STRING,defaultValue:"tsumuri3"}
   }
  },
    {opcode:'getUserDatabio',
   blockType:Scratch.BlockType.REPORTER,
   text:'[username]の「私について」情報',
   arguments:{
     username:{type:Scratch.ArgumentType.STRING,defaultValue:"tsumuri3"}
   }
  }
  ,
    {opcode:'getUserDatastatus',
   blockType:Scratch.BlockType.REPORTER,
   text:'[username]の「私が取り組んでいること」情報',
   arguments:{
     username:{type:Scratch.ArgumentType.STRING,defaultValue:"tsumuri3"}
   }
  }
  ,
    {opcode:'getUserDatacountry',
   blockType:Scratch.BlockType.REPORTER,
   text:'[username]の住んでいる国',
   arguments:{
     username:{type:Scratch.ArgumentType.STRING,defaultValue:"tsumuri3"}
   }
  }
  ,
      {opcode:'SearchWikipedia',
   blockType:Scratch.BlockType.REPORTER,
   text:'Wikipedia[keyword]',
   arguments:{
     keyword:{type:Scratch.ArgumentType.STRING,defaultValue:"魔女の旅々"}
   }
  }
  ,
      {opcode:'SearchScratchWiki',
   blockType:Scratch.BlockType.REPORTER,
   text:'ScratchWiki[keyword]',
   arguments:{
     keyword:{type:Scratch.ArgumentType.STRING,defaultValue:"Scratch"}
   }
  }
  ,
        {opcode:'ShortenURL',
   blockType:Scratch.BlockType.REPORTER,
   text:'[URL]の短縮URL生成',
   arguments:{
     URL:{type:Scratch.ArgumentType.STRING,defaultValue:"https://scratch.mit.edu"}
   }
  },
    {opcode:'big_small_text_test',
   blockType:'Boolean',
   text:'[TEXT]は[SUBTEXT]と一致',
   arguments:{
     TEXT:{type:'string',defaultValue:"A"},
     SUBTEXT:{type:'string',defaultValue:"a"}
   }
  },

        {opcode:'yendollar',
   blockType:Scratch.BlockType.REPORTER,
   text:'[yen]円=>ドル',
   arguments:{
     yen:{type:Scratch.ArgumentType.STRING,defaultValue:"300"}
   }
  },
          {opcode:'dollaryen',
   blockType:Scratch.BlockType.REPORTER,
   text:'[dollar]ドル=>円',
   arguments:{
     dollar:{type:Scratch.ArgumentType.STRING,defaultValue:"1"}
   }
  }









  
    ,{opcode:'credit',
   blockType:Scratch.BlockType.REPORTER,
   text:'Credit',
  }

  
]
}
}

exponential(args){
  return args.NUMBER**args.SUBNUMBER;
}
factorial (args) {
    var j = 1;
  for(var i = 1; i <= args.number; i++){
    j *= i;
  }
  return j;
    }
  calculation(args){
   return eval(args.math);
}
encodeURI(args){
  return encodeURI(args.TEXT);
}
  decodeURI(args){
  return decodeURI(args.TEXT);
}
  useragent(){
   return window.navigator.userAgent;
}
    nowUTC(){
   var dt = new Date();
var g = dt.toUTCString();
      return g;
}
  getWWWdata(args){
  return fetch(args.url).then(a=>a.text()).then(a=>a).catch(a=>{return ""});
    
}

big_small_text_test(args){
  if(args.TEXT==args.SUBTEXT){
  return true;
  }else{
    return false;
  }
}
  
async getUserDataID({ username } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratch/user-info.php?user=${username}/`);
  const data = await apiResponse.json();
  return data.id;
}
  
async getUserMessagesCount({ username } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratch/user-messages.php?user=${username}/`);
  const data = await apiResponse.json();
  return data.count;
}

async getUserDatabio({ username } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratch/user-info.php?user=${username}`);
  const data = await apiResponse.json();
  return data.profile.bio;
}
async getUserDatastatus({ username } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratch/user-info.php?user=${username}`);
  const data = await apiResponse.json();
  return data.profile.status;
}
async getUserDatacountry({ username } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratch/user-info.php?user=${username}`);
  const data = await apiResponse.json();
  return data.profile.country;
}

async SearchWikipedia({ keyword } = {}){
  const apiResponse = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/summary/${keyword}`);
  const data = await apiResponse.json();
  return data.extract;
}
  async SearchScratchWiki({ keyword } = {}){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/scratchwiki/data.php/?query=${keyword}`);
  const data = await apiResponse.json();
  return data.source;
}
  async ShortenURL({ URL } = {}){
  const apiResponse = await fetch(`https://is.gd/create.php?format=simple&format=json&url=${ URL }`);
  const data = await apiResponse.json();
  return data.shorturl;
}
  async yendollar(args){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/kawase/index.php`);
  const data = await apiResponse.json();
  return args.yen / data.result.rate.USDJPY;
}
    async dollaryen(args){
  const apiResponse = await fetch(`https://API-CORS.tsumuri3.repl.co/kawase/index.php`);
  const data = await apiResponse.json();
  return args.dollar * data.result.rate.USDJPY;
}
  credit(){
   return `
tsumuri1017's 拡張機能
この拡張機能は
色々な方々から
手伝っていただき
完成したものです。
作成に携わって
いただいた方々には
感謝しきれません。
ここに、手伝って
いただいた方々の、
ユーザー名を
表示します。
(GitHubでは諸事情によりユーザー名リストは表示しません)
`;
}



}

Scratch.extensions.register(new S_REGEX());
