const { add, a } = require('./local-1')
const { add: add2, a: a2 } = require('./local-2')

console.log(add(2, 3), a2);


//built in modules
const path = require('path');

console.log(path.dirname('D:/Web Development/project/learning-nodejs/local-2.js'));
console.log(path.join('D:/Web Development/project/learning-nodejs/', 'local-2.js'));
console.log(path.parse('D:/Web Development/project/learning-nodejs/local-2.js'));