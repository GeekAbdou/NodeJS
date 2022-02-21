import supertest from 'supertest'
import fs from 'fs/promises'
import { Stats } from 'fs'
import path from 'path'
import sizeOf from 'image-size'

import app from '../main'

const request = supertest(app)

describe('Test GET /api/images Router', () => {
    //Error Tests
    it('Error 404 if image not found', async () => {
        const response = await request.get(
            '/api/images?filename=test&height=10&width=10'
        )
        expect(response.status).toBe(404)
    })

    it('Error 400 if missing parameters', async () => {
        const response = await request.get(
            '/api/images?filename=test&height=10'
        )
        expect(response.status).toBe(404)
    })

    it('Error 400 if missing parameters', async () => {
        const response = await request.get(
            '/api/images?filename=test&height=10'
        )
        expect(response.status).toBe(404)
    })

    it('Error 400 if missing parameters', async () => {
        const response = await request.get('/api/images?filename=test')
        expect(response.status).toBe(404)
    })

    it('Error 400 if missing parameters', async () => {
        const response = await request.get('/api/images?filename=test&width=10')
        expect(response.status).toBe(404)
    })

    //OK tests
    it('status 200 if URL is okay and Img is existing ', async () => {
        const response = await request.get(
            '/api/images/?filename=okTest&height=200&width=400'
        )
        expect(response.status).toBe(200)
    })

    it('Test API functionality', (oK): void => {
        request
            .get('/api/images/?filename=okTest&height=200&width=400')
            .then(() => {
                fs.stat(
                    path.resolve(
                        __dirname,
                        '../../img/thumb/okTest-200x400.jpg'
                    )
                ).then((fileStat: Stats) => expect(fileStat).not.toBeNull())
                oK()
            })
    })

    it('check width and height of the thumb', (oK): void => {
        request
            .get('/api/images/?filename=okTest&height=200&width=400')
            .then(() => {
                const dim = sizeOf(
                    path.resolve(
                        __dirname,
                        '../../img/thumb/okTest-200x400.jpg'
                    )
                )
                expect(dim.height).toEqual(200)
                expect(dim.width).toEqual(400)
                oK()
            })
    })
})
