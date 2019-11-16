const express = require('express')
const http = require('http')
const path = require('path')

let app = express()

// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (
//         req.hostname !== 'localhost' &&
//         !req.secure &&
//         req.get('x-forwarded-proto') !== 'https' &&
//         process.env.NODE_ENV !== 'development'
//     ) {
//         return res.redirect('https://' + req.get('host') + req.url)
//     }
//     next()
// }

// app.use(requireHTTPS)

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', 'text/javascript')
    next()
})

app.use(express.static(path.join(__dirname, './')))

const port = process.env.PORT || '3000'
app.set('port', port)
const server = http.createServer(app)

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.listen(port, () => console.log(`Running on localhost:${port}`))

console.log('App is listening on port ' + port)
