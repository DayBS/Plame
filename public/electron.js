const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    // In development, use React development server
    mainWindow.loadURL('http://localhost:3000');
  } else {
    // In production, serve the bundled React app with Express
    const expressApp = express();

    expressApp.use(express.static(path.join(__dirname, 'build', 'index.html')));

    expressApp.listen(3000, () => {
      console.log('Server running at http://localhost:3000');
      mainWindow.loadURL('http://localhost:3000');
    });
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
