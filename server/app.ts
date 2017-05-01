// const {Server} = require('http');

// let i = 0;

// const server = new Server((req, res) => {
//   debugger;
//   i += 1;
//   res.end(i.toString()); // (!!! toString) Buffer
// });

// server.listen(8000);

// const {Server} = require('http');
// import {Server} from 'http';
// import {createServer} from 'http';

// let i: number = 0;
// const server = new Server((req, res) => {
//   i++;
//   res.end(i.toString()); // (!!! toString)
// });

// server.listen(8000);


// import {createServer} from 'http';
// import {count} from './count';

// let i: number = 0;
// const server = createServer((req, res) => {
//   count();
//   i++;
//   res.end(i.toString());
// });
// server.listen(3000);

import * as http from 'http';
// const http = require('http');

const server = http.Server((req, res) => {
  count();
  i++;
  res.end(i.toString());
});
server.listen(3000);






const {Server} = require('http');
const server = new Server((req, res) => {}); // ok
//
import {Server} from 'http';
const server = new Server((req, res) => {}); // - Cannot find name 'Server'

// и тут также
const http = require('http');
const server = http.Server((req, res) => {.. // ok

import * as http from 'http';
const server = http.Server((req, res) => {
// Property 'Server' does not exist on type 'typeof "http"'.










// 'use strict';

// let url = require('url');
// let fs = require('fs');

// require('http').createServer(function(req, res) {

//   const pathname: string = decodeURI(url.parse(req.url).pathname);

//   switch (req.method) {
//   case 'GET':
//     if (pathname === '/') {
//       // отдачу файлов следует переделать "правильно", через потоки, с нормальной обработкой ошибок
//       fs.readFile(__dirname + '/public/index.html', (err, content) => {
//         if (err) throw err;
//         res.setHeader('Content-Type', 'text/html;charset=utf-8');
//         res.end(content);
//       });
//       return;
//     }

//   default:
//     res.statusCode = 502;
//     res.end("Not implemented");
//   }

// }).listen(3000);




















// 'use strict';

// let url = require('url');
// let fs = require('fs');

// require('http').createServer(function(req, res) {

//   const pathname: string = decodeURI(url.parse(req.url).pathname);

//   switch (req.method) {
//   case 'GET':
//     if (pathname === '/') {
//       // отдачу файлов следует переделать "правильно", через потоки, с нормальной обработкой ошибок
//       fs.readFile(__dirname + '/public/index.html', (err, content) => {
//         if (err) throw err;
//         res.setHeader('Content-Type', 'text/html;charset=utf-8');
//         res.end(content);
//       });
//       return;
//     }

//   default:
//     res.statusCode = 502;
//     res.end("Not implemented");
//   }

// }).listen(3000);

