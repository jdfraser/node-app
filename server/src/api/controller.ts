import { Router, Response } from 'express';

const error = (
    res: Response, 
    err: unknown,
    statusCode: number = 500
) => {
    const message = err instanceof Error ? err.message : err;
    const json = JSON.stringify({
        error: message
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(statusCode);
    res.end(json);
}

interface Controller {
    (...args: any[]): Router;
};

export {
    error,
    Controller
}