const name ="hitesh"
const repocount =50

//console.log(name +repocount +"value")

console.log('hello my name is${name} and my repo count is ${repocount}');

//string syntex
const gameName = new String("bhumi")

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const newStringone = " nidhi  "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://bhumi.com/bhumi%27patel"
console.log(url.replace('27','@'))

console.log(url.includes('bhumi'))