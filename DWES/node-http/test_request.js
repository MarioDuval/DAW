import https from 'https';

// https://www.frankfurter.app/docs/

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 

const options = {
    hostname: 'api.frankfurter.app',
    port:443,
    path: '/latest?from=USD',
    method: 'GET'
}


const req = https.request(options, res => {
    console.log(`status: ${res.statusCode}`);

    res.on('data', data => {
        console.log(data.toString());
    });
});

req.on('error', error => {
    console.log(error);
});

req.end();