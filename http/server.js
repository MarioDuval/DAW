import http from "http";
import fs from "fs";

// const handler = (req, resp) => {
//     console.log("Recibimos petición");
//     resp.end("<h1 style=color:red;>Hola paola</h1>");
// }

// const server = http.createServer(handler);
// server.listen(3000);
// console.log('Server OK http://localhost:3000');

// http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
  
//     var file = fs.createReadStream('index.html');
//     file.pipe(response);
  
//   }).listen(8080);
  
//   console.log('listening on port 8080...');

  fs.readFile('./index.html', (err, html) => {
    const handler = (req, resp) => {
            console.log("Recibimos petición");
            resp.writeHeader(200, {'Content-Type': 'text/html'});
            resp.write(html);
            resp.end;
        }
    const server = http.createServer(handler);
    server.listen(3000);
    console.log('Server OK http://localhost:3000');
  });