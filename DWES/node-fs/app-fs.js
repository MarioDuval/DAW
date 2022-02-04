import fs from 'fs'

// const data = fs.readFileSync('./movies.json');
// console.log(JSON.parse(data));

fs.readFile, fs.readFileSync('./movies.json', (err, data) => {
    console.log(JSON.parse(data));
});

console.log("Después de llamar a readfile");