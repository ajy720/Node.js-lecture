const {ipcRenderer} = require('electron');

window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key.toLowerCase() == "q"){
        ipcRenderer.send("openDev");
    }
});

window.addEventListener("load", ()=>{
    let name = document.querySelector("#summonerName");
    let searchBtn = document.querySelector("#search");

    searchBtn.addEventListener("click", (e)=>{
        let str = name.value;
        ipcRenderer.send("summoner", {name:str});
    });
});