import express from 'express';
import socketIo from 'socket.io';
import Controller from '../controller.js';
import Message from '../../models/message.js';

const router = express.Router();
const messages: Message[] = [];

const controller: Controller = (io: socketIo.Server) => {
    io.on('connection', socket => {
        socket.emit('updateMessages', messages);
    })

    router.post('/', (req, res) => {
        messages.push(req.body.message);
        io.emit('updateMessages', messages);
        res.sendStatus(200);
    })

    router.get('/', (req, res) => {
        const json = JSON.stringify(messages);

        res.setHeader('Content-Type', 'application/json');
        res.end(json);
    })

    return router;
}

export default controller;