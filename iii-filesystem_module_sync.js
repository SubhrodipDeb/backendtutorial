//There are 2 ways of using  a filesystem
//1.In a synchronous fashion ie blocking
//2.In a asynchronous fashion ie nonblocking
//utf8 is an encoding that helps node to understand how to decode the file
//The methods readFileSync takes the path as well as the encoding utf8 as input
const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./Folder/first.txt','utf8');
const second=readFileSync('./Folder/second.txt','utf8');
console.log({first,second})
// in order to create  afile we use the method writeFileSync
writeFileSync('./Folder/new_file.txt',`Here is the result ${first+second}`,{flag:'a'})
//now if you taht the text twice ie we want to append the same text 2 times we use flag:'a'
writeFileSync('./Folder/resultantfile.txt',`Here is the result: ${first+second}`,{flag:'a'})