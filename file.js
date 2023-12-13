const fs = require('fs');

// reading text 
const reading = fs.readFileSync('./texts/read.txt', 'utf-8');
console.log(reading);

//writing text 
fs.writeFileSync('./texts/write.txt', reading + 'This is my written text')


//asynchronous reading
fs.readFile('./texts/write.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error('Error reading')
    }
    console.log(data);
});

//asynchronous writing
fs.writeFile('./texts/write2.txt', 'This is asynchronous writing','utf-8', (err) => {
    if (err) {
        throw Error('Error writing')
    }
})