import * as electron from 'electron'

const { app, BrowserWindow } = electron
let mainWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 220,
    height: 100,
    title: "Base electron TypeScript"
  })
}

app.on('ready', createMainWindow)