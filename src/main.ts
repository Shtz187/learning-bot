import express from 'express'
import { AddressInfo } from 'net'

const app = express()

app.use((req, res) => {
    const { headers, hostname, originalUrl, url, path } = req
    const date = (new Date()).toISOString()
    res.send({ headers, hostname, originalUrl, url, path, date })
})

const server = app.listen(process.env.PORT || 3000, () => {
    const addr = server.address() as AddressInfo
    console.log(`listening on ${addr.address}:${addr.port} [${addr.family}]`)
})

process.on('SIGINT', () => {
    console.log('goodbye!')
    server.close()
})