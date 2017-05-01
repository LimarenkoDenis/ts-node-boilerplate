import {createServer} from 'http';
import {count} from './count';

let i: number = 0;
const server = createServer((req, res) => {
  count();
  i++;
  res.end(i.toString());
});
server.listen(3000);



















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

