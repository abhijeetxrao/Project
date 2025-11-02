import express from 'express'
const app = express()

import healthCheckRouter from './src/routes/healthcheck.routes.js'

//routes

app.use("/api/v1/healthCheck", healthCheckRouter)

export default app;