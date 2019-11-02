const {app, BrowserWindow, ipcMain, Menu} = require('electron');

const option = {
    width:1200,
    height:600,
    resizable: false,
    webPreferences:{
        nodeIntegration: true,
        nativeWindowOpen: true,
    }
};

let win = null;

app.on("ready", ()=>{
    Menu.setApplicationMenu(null);
    win = new BrowserWindow(option);
    
    win.loadFile("index.html");
});

ipcMain.on("openDev", ()=>{
    win.webContents.openDevTools();
});

ipcMain.on("summoner", (e, data)=>{
    console.log(data);
});