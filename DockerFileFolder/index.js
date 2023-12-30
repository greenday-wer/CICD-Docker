const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('CICD');
});

server.listen(1234, () => {
    console.log('server running at http://192.168.241.205:1234/');
});
