const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300
  })

  win.loadFile('react-app/index.html');
  win.setMenu(null);
}

  app.whenReady().then(() => {
    createWindow()

    app.on ('activate', () => {
       if (Browser.Window.getAllWindows().length === 0) createWindow()})
})

   app.on('window-all-closed', () => {
     if (process.plataform !== 'darwin')  {
	     app.quit()
     }
})

try {
    require('electron-reloader')(module);
} catch {}
