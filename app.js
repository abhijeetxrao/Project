import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import healthCheckRouter from './src/routes/healthcheck.routes.js'
import userRoute from './src/routes/auth.routes.js'

//routes

app.use("/api/v1/healthCheck", healthCheckRouter)
app.use("/api/v1/user", userRoute)

export default app;