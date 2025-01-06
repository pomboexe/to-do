"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get('/home', async (req, res) => {
    return 'server home';
});
server.listen({ port: 3001 }, (err, address) => {
    if (err) {
        console.error('server not running', err);
    }
    console.log(`Server listen in ${address}`);
});
