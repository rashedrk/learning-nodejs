const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/read-file' && req.method === 'GET') {
        //streaming file reading
        const readableStream = fs.createReadStream(__dirname+'/texts/read2.txt');

        readableStream.on('data', (buffer) =>{
            res.write(buffer);
        })

        readableStream.on('end', () =>{
            res.end('This is End')
        })
    }
    
})

server.listen(5000, () => {
    console.log('server is listening on port 5000');
})