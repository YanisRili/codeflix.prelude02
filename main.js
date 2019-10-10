let first = require('./ex01')
let last = require('./ex03')

console.log("=> First")
console.log(first([10,5,'hello']))
console.log(first([10,5,'hello'], 2))
console.log(first([10,5,'hello'], 3))
console.log(("<="))

console.log("=> Initial")
console.log(last([10,5,'hello',2]))
console.log(last([10,5,'hello',2],2))
console.log(last([10,5,'hello',2],3))
console.log("<=")