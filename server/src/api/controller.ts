import express from 'express';

export default interface Controller {
    (...args): express.Router;
};