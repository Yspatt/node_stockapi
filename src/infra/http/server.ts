import 'reflect-metadata'

import 'express-async-errors'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

import { AppError } from '../../errors/AppError'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

app.use(routes)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            })
        }

        return response.status(500).json({
            status: 'error',
            message: `Internal server error - ${err.message}`,
        })
    }
)
const PORT = 3333
app.listen(PORT, () => {
    console.log(`Backend Running in port ${PORT}.`)
})
