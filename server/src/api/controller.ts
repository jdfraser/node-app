import express from 'express';
import { Response } from 'express-serve-static-core';

const error = (
    res: Response<any, Record<string, any>, number>, 
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
    (...args: any[]): express.Router;
};

export {
    error,
    Controller
}