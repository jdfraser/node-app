import express from 'express';
import chalk from 'chalk';
import debug from 'debug'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// construct __dirname since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const messages = [];

const logDebug = debug('app');

logDebug("process env: " + JSON.stringify(process.env));

const app = express();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.json());

app.get('/messages', (req, res) => {
    res.json({messages: messages});
})

app.post('/messages', (req, res) => {
    messages.push(req.body.message);
    res.json({messages: messages});
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..client/build', 'index.html'))
})

app.listen(PORT, () => {
    logDebug(`Listening on port ${chalk.green(PORT)}`);
})  