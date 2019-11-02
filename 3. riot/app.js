const req = require('request');

let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let name = "현 슭";
name = encodeURI(name);
console.log(name);

//let key = "RGAPI-d5ed5d04-6607-4753-b746-5935ab5722d8";
let key = "RGAPI-ad8da794-703f-469c-aa34-eb03f33229d8";
req.get(`${url}${name}?api_key=${key}`, (err, res, body)=>{
    console.log(body);
});
