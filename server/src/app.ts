import express, { Express, Request, Response } from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import Message from './models/message.js';
import log from './utils/log.js';
import db from './persistence/database.js';

// construct __dirname since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const messages: Message[] = [];

const app = express();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.json());

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', socket => {
    log.info('New connection.');
    socket.emit('updateMessages', messages);

    socket.on('disconnect', () => {
        log.info('Client disconnected');
    })
})

app.post('/messages', (req, res) => {
    messages.push(req.body.message);
    io.emit('updateMessages', messages);
    res.sendStatus(200);
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..client/build', 'index.html'))
})

httpServer.listen(PORT, async () => {
    log.info('Connecting to database...');

    await db.testConnection()
        .then(() => log.info(`${chalk.green('Success')}`))
        .catch(() => {
            log.info(`${chalk.red('Failure')}`);
            log.warn('Unable to connect to database. Message history will be lost on server restart.');
        })
    
    log.info(`Listening on port ${chalk.green(PORT)}`);
})  