// Bad
const mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  })
  
  mainWindow.loadURL('https://example.com')