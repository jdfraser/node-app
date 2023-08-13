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
            .send({ name: 'John', text: 'GARFIELD!' })
            .set('Accept', 'application/json')
        
        expect(response.statusCode).toBe(200);
    })
})