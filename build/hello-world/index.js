'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hostname = '127.0.0.1'; // v6+  又不支持import/export 了，需要babel

const port = 3000;

const server = _http2.default.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

if (!module.parent) {
  server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
  });
}

exports.default = server;
//# sourceMappingURL=index.js.map