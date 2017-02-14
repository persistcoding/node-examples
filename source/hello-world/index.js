// v6+  又不支持import/export 了，需要babel
import http from 'http'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

if(!module.parent) {
  server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
  })
}

export default server
