app.on('web-contents-created', (event, contents) => {
    contents.on('will-attach-webview', (event, webPreferences, params) => {
    //   // Strip away preload scripts if unused or verify their location is legitimate
    //   delete webPreferences.preload
  
    //   // Disable Node.js integration
    //   webPreferences.nodeIntegration = false
  
    //   // Verify URL being loaded
    //   if (!params.src.startsWith('https://example.com/')) {
    //     event.preventDefault()
    //   }
    })
  })