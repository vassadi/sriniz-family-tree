// In the main process.
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
    },
  });
  mainWindow.loadURL('http://localhost:3000');

  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.show();
  // });

  mainWindow.webContents.openDevTools();
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, '../public/index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );
  // Do stuff with mainWindow...
});
