var jwt = require('jsonwebtoken');

// var privateKey = fs.readFileSync('private.key');
var privateKey = 'feferferferfe';
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });

console.log(token);