const path = require("path");
const fs = require("fs");

// fs.open(path.join(__dirname,'prac.txt'),'r',(err,fd) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(err,fd);    //null 3 （3是fd的文件描述符）

//     let buf = Buffer.alloc(5)
//     fs.read(fd,buf,0,3,null,(err,bytes,buffer) => {
//         console.log(err,bytes,buffer);
//     })
// })

// fs.open(path.join(__dirname,'prac.txt'),'w',(err,fd) => {
//     let buf = Buffer.from('love you')
//     fs.write(fd,buf,0,8,(err,written,buffer) => {
//         console.log(err,written,buffer)
//     })
// })
// fs.open(path.join(__dirname,'prac.txt'),'w',(err,fd) => {
//     fs.write(fd,'yrl',(err,written,str) => {
//         console.log(err,written,str)
//     })
// })

// fs.writeFile(path.join(__dirname,'prac.txt'),'Love',(err) => {
//     console.log(err);
// })

// fs.readFile(path.join(__dirname,'www/index.html'),(err,info) => {
//     // console.log(err,info);
//     fs.writeFile(path.join(__dirname,'index1.html'),info,(err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("读写成功");
//         }

//     })
// })

// fs.unlink(path.join(__dirname,"index1.html"),(err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("success");
// })
// console.log(path.join(__dirname))
fs.mkdir(path.join(__dirname,"aB"),(err) => {
    if(err) {
        console.log('failed')
    } else {
        console.log('success');
    }
})