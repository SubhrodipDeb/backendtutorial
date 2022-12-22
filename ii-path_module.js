const path=require('path')
console.log(path.sep)
const filepath=path.join('Folder/Subfolder/test.txt')
console.log(filepath) // this returns the entire path
//If we want to get just the last part of the path ie test.txt then we use basename
const base=path.basename(filepath)
console.log(base)
//If we want ot return the absolute path then we use path.resolve
const absolute=path.resolve(__dirname,'Folder','Subfolder','test.txt')
console.log(absolute)