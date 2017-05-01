// import {createServer} from 'http';

// const server = createServer(function(req, res) {
//   console.log(req.url);
// });

// server.listen(8000);



const {Server} = require('http');

let i = 0;

const server = new Server((req, res) => {
  debugger;
  i += 1;
  res.end(i.toString()); // (!!! toString) Buffer
});

server.listen(8000);

