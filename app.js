import express from 'express';
import chalk from 'chalk';
import debug from 'debug'

const app = express();
const logDebug = debug('app');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    logDebug(`Listening on port ${chalk.green('3000')}`);
})