import express, { Express, Request, Response } from 'express';
import chalk from 'chalk';
import debug from 'debug'
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import pg from 'pg';
import Message from './api/models/message.js';

// construct __dirname since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const messages:Message[] = [];

const logDebug = debug('app');

logDebug("process env: " + JSON.stringify(process.env));

const app: Express = express();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.json());

const testDbConnection = async () : Promise<void> => {
    const db = new pg.Client({
        user: 'node_chat',
        password: 'dev',
        database: 'node_chat',
    });

    try {
        logDebug('Connecting to database...');
        await db.connect();
        await db.query('SELECT $1::text as message', ['Test Query']);
        logDebug(`${chalk.green('Success')}`);
    } catch (err) {
        logDebug(`${chalk.red('Failure')}`);
        logDebug(`${chalk.yellow('WARNING')}: Unable to connect to database. Message history will be lost on server restart.`)
    } finally {
        db.end();
    }
}

const httpServer = http.createServer(app);
const io = new Server(httpServer);

const emitMessages = () => {
    io.emit('updateMessages', messages);
}

io.on('connection', socket => {
    logDebug('New connection.');
    socket.emit('updateMessages', messages);

    socket.on('disconnect', () => {
        logDebug('Client disconnected');
    })
})

app.post('/messages', (req: Request, res: Response) => {
    messages.push(req.body.message);
    emitMessages();
    res.sendStatus(200);
})

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../..client/build', 'index.html'))
})

httpServer.listen(PORT, async () => {
    await testDbConnection();
    
    logDebug(`Listening on port ${chalk.blue(PORT)}`);
})  