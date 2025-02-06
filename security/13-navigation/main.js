const { URL } = require('url')
const { app } = require('electron')

app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl)

    // if (parsedUrl.origin !== 'https://example.com') {
    //   event.preventDefault()
    // }
  })
})