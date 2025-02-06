// Bad
const mainWindow = new BrowserWindow({
    webPreferences: {
      enableBlinkFeatures: 'ExecCommandInJavaScript'
    }
  })