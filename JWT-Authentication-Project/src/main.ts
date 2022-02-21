import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import errorMiddlewareError from './middleware/error'
import config from './config'

const PORT = config.port

// create an instance server
const app: Application = express()
//express Jason =>  to parses incoming requests with JSON payloads(body-parser is now build in express).
//morgan => HTTP request logger .

app.use(express.json())
app.use(morgan('common'))
app.use(helmet())

// error handler & middleware
app.use(errorMiddlewareError)

// Basic rate-limiting middleware for Express
// Apply the rate limiting middleware to all requests
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'you request is more 100 .. try after one hour',
  })
)

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'welcome',
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server port:${PORT}`)
})
export default app
