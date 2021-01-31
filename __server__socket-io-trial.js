/* eslint-disable @typescript-eslint/no-var-requires */
const expressApp = require('express')()
const expressServer = require('http').Server(expressApp)
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .catch(console.error)
    .then(() => {
        expressApp.get('*', (req, res) => {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            handle(req, res, { ...parsedUrl, io })
        })

        expressServer.listen(3000, err => {
            if (err) {
                console.error(err)
                throw err
            }
            console.log('> Ready on http://localhost:3000')
        })
    })

// const nextApp = next({ dev })
// const nextHandler = nextApp.getRequestHandler()

// nextApp.prepare().then(() => {
//     app.get('*', (req, res) => nextHandler(req, res))

//     server.listen(port, err => {
//         if (err) throw err
//     })
// })
