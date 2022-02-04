import fs from 'fs';
import http from 'http';

const _file = 'data/localidades.json';

const requestListener = function (req, res) {
    fs.readFile(_file, function(err, data) {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(data);
        res.end()
    })
}

const server = http.createServer(requestListener);
server.listen(3000);

console.log("Server http://localhost:3000")