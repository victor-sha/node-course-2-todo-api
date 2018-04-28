const { SHA256 } = require("crypto-js");
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded ',decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// // client's data
// var data = {
//     id:4
// };
// // client get's and sends data with hash
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // man in the middle
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString(); // but he don't know salt's value

// // on server we get token and compare it's hash+secret
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }
