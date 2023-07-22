import express from 'express';
import chalk from 'chalk';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log(`Listening on port ${chalk.green('3000')}`);
})