import request from 'supertest';
import server from '../../src/app.js'

afterAll(done => {
    server.close();
    done();
})

describe('POST /messages', () => {
    it('accepts a single message', async () => {
        const response = await sendMessage({ name: 'John', text: 'GARFIELD!' });
        expect(response.statusCode).toBe(200);
    })

    it('errors on a malformed message', async () => {
        const response = await sendMessage({ name: 'John', tex: 'GARFIELD!' });
        expect(response.statusCode).toBe(500);
    })

    it('removes invalid properties', async () => {
        await sendMessage({ name: 'John', text: 'GARFIELD!', lasagna: true });
        const response = await getMessages();
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([{ name: 'John', text: 'GARFIELD!' }]));
        expect(response.body).not.toEqual(expect.arrayContaining([{ name: 'John', text: 'GARFIELD!', lasagna: true }]));
    })
})

describe('GET /messages', () => {
    it('returns saved messages', async () => {
        await sendMessage({ name: 'John', text: 'GARFIELD!' });
        const response = await getMessages();
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([{ name: 'John', text: 'GARFIELD!' }]));
    })
})

const sendMessage = async (message: object): Promise<request.Response> => {
    return await request(server)
        .post('/messages')
        .set('Content-Type', 'application/json')
        .send({message})
}

const getMessages = async (): Promise<request.Response> => {
    return await request(server)
        .get('/messages')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send()
}