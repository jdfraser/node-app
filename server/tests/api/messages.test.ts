import request from 'supertest';
import server from '../../src/app.js'

afterAll(done => {
    server.close();
    done();
})

describe('POST /messages', () => {
    it('accepts a single message', async () => {
        const response = await request(server)
            .post('/messages')
            .set('Content-Type', 'application/json')
            .send({message: { name: 'John', text: 'GARFIELD!' }})

        expect(response.statusCode).toBe(200);
    })

    it('errors on a malformed message', async () => {
        const response = await request(server)
            .post('/messages')
            .set('Content-Type', 'application/json')
            .send({message: { name: 'John', tex: 'GARFIELD!' }})
        
        expect(response.statusCode).toBe(500);
    })
})