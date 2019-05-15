console.log("started <node>");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url')

let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, './sbgc/index.html'),
        protocol: 'file',
        slashes: true,
        
    }));
    win.setMenu(null);
    win.setFullScreen(true)
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(win === null){
        app.quit()
    }
});

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
});