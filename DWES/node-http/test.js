import http from 'http';
import fs from 'fs';
import path  from 'path';


const requestListener = (request, response) => {
    console.log("Recibiendo request");

    let ext = path.extname(request.url)

    console.log(ext);

    switch (ext) {
        case '.ico':
            response.setHeader('content-type', 'image/x-ico');
            response.statusCode = 200;
            break;
        case '.html':
            response.setHeader('content-type', 'text/html');
            response.statusCode = 200;
            break;
        case '.css':
            response.setHeader('content-type', 'text/css');
            response.statusCode = 200;
            break
        case '.jpeg':
            response.setHeader('content-type', 'image/jpeg');
            response.statusCode = 200;
            break;
        default:
            response.setHeader('content-type', 'text/html');
            break;
    }

    let data = "" + request.url;
    console.log(data);

    if ((data == "/index.html") || (data == "/favicon.ico")) {
        data = "/index.html";
        console.log(data);
    } else  if (data == "/"){
        data = "/index4.html";
    }

    console.log(data)
    let html = fs.readFileSync("." + data);

    response.write(html);
    response.end();


}

const server = http.createServer(requestListener);
server.listen(3000);

console.log('servidor en http://localhost:3000/');