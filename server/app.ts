// import http = require('http');
// import * as url from 'url';
// // const count = require('./count');
// import count = require('./count'); // ok

// const server = http.createServer((req, res) => {
//   const urlParse = url.parse(req.url, true, true);
//   console.log(count());
//   res.end();
// });
// server.listen(8000);
// ok
// =============================
//
// const {Server} = require('http');
// const server = new Server((req, res) => {}); // ok
//
// import {Server} from 'http';
// const server = new Server((req, res) => {}); // - Cannot find name 'Server'
//
//
// =============================
//
// и тут также
// const http = require('http');
// const server = http.Server((req, res) => {}) // ok
//
// import * as http from 'http';
// const server = http.createServer((req, res) => { // ok
// const server = http.Server((req, res) => { // err
// Property 'Server' does not exist on type 'typeof "http"'.
//
// =============================
//
// const { Server } = require('http');
//
// const server = new Server();
// server.on('request', (req, res) => {
//   if (req.url === '/') {
//     res.end('Hello, world!');
//   }
// });
//
// server.listen(8000);
//
//

// import { Server } from 'http';
// const server = new Server();

