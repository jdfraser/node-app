import debug from "debug";
import chalk from "chalk";

const log = debug('app');

const info = (message: string) => {
    log(`${chalk.whiteBright('INFO')}: ${message}`);
}

const warn = (message: string) => {
    log(`${chalk.yellowBright('WARN')}: ${message}`);
}

const err = (message: string) => {
    log(`${chalk.redBright('ERR')}: ${message}`);
}

export default {
    info,
    warn,
    err
}