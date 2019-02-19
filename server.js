/* eslint-disable no-console */

import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'

const app = express()

const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start(callback) {
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

  if (Object.prototype.toString.call(callback) === '[object Function]') {
    callback()
  }
}

start()
