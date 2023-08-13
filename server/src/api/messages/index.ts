import express from 'express';
import socketIo from 'socket.io';
import { isLeft } from 'fp-ts/lib/Either.js';
import { PathReporter } from 'io-ts/lib/PathReporter.js';
import { Controller, error } from '../controller.js';
import { Message, MessageValidator } from '../../models/message.js';

const router = express.Router();
const messages: Message[] = [];

const controller: Controller = (io: socketIo.Server) => {
    io.on('connection', socket => {
        socket.emit('updateMessages', messages);
    })

    router.post('/', (req, res) => {
        try {
            const message = validateMessage(req.body.message);
            messages.push(message);
            io.emit('updateMessages', messages);
            res.sendStatus(200);
        } catch (e) {
            error(res, e);
        }
    })

    router.get('/', (req, res) => {
        const json = JSON.stringify(messages);

        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.end(json);
    })

    return router;
}

const validateMessage = (obj: unknown): Message => {
    const decoded = MessageValidator.decode(obj);
    if(isLeft(decoded)) {
        throw Error(
            `Could not validate data: ${PathReporter.report(decoded).join("\n")}`
        );
    }

    return decoded.right;
}

export default controller;