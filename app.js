let fs = require("fs");
let _ = require("lodash");

const stopwords = fs.readFileSync("stopwords.txt").toString().toLowerCase().split(",");
const words = fs.readFileSync("story.txt").toString().toLowerCase().split(" ");
const counts = _.countBy(words.filter((x) => stopwords.indexOf(x) == -1 && x.length>=2));
const result = Object.keys(counts).map(key => [key,counts[key]]).sort((first,second)=>  second[1] - first[1]);
console.log(counts);
console.log( Object.keys(counts));
console.log( Object.keys(counts).map(key => [key,counts[key]]));
console.log( Object.keys(counts).map(key => [key,counts[key]]).sort((first,second)=>  second[1] - first[1]));