import * as electron from 'electron'
import * as path from 'path'
import * as url from 'url'

const { app, BrowserWindow } = electron
let mainWindow: electron.BrowserWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Noseversity - Pomodoro"
  })

  // Laod page
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'frontend/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createMainWindow)