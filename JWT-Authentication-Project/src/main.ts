import express, { Application, Request, Response } from 'express'

const PORT = 3000
// create an instance server
const app: Application = express()

//git express

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome',
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
