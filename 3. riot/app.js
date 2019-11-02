const req = require('request');

let url_summoner = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let url_matchlist = "https://kr.api.riotgames.com//lol/match/v4/matchlists/by-account/";
let name = "현 슭";
name = encodeURI(name);
console.log(name);

let key = "?api_key=RGAPI-d5ed5d04-6607-4753-b746-5935ab5722d8";
//let key = "RGAPI-ad8da794-703f-469c-aa34-eb03f33229d8";
req.get(`${url_summoner}${name}${key}`, (err, res, body)=>{
    let json = JSON.parse(body);
    console.log(json);

    let accId = json.accountId;

    req.get(`${url_matchlist}${accId}${key}`, (err, res, body)=>{
        let json = JSON.parse(body);
        console.log(json);
    });
});