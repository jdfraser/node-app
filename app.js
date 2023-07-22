import express from 'express';
import chalk from 'chalk';
import debug from 'debug'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// construct __dirname since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const logDebug = debug('app');

const app = express();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    logDebug(`Listening on port ${chalk.green('3000')}`);
})