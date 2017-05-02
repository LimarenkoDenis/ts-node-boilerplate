import http = require('http');
import * as url from 'url';
import count = require('./count'); // ok
// const count = require('./count');

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse): void => {
  const urlParse: url.Url = url.parse(req.url, true, true);
  console.log(urlParse);
  console.log(count());
  res.end();
});
server.listen(8000);
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

