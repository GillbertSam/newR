let cfg = require("./config.json");
const path = require("path");
const fs = require("fs");
let rootName = cfg.rootName;
fs.mkdir(path.join(__dirname,rootName),(err) => {
    if(err) {
        console.log('创建根目录失败');
        return;
    }
    console.log('创建根目录成功');
    cfg.data.forEach((obj) => {
        if(obj.type == "dir") {
            fs.mkdir(path.join(__dirname,rootName,obj.name),(err) => {
                if(err) {
                    console.log('创建子目录失败')
                }
                console.log('创建子目录成功')
            })
        } else if(obj.type == "file") {
            fs.readFile(path.join(__dirname,obj.name),(err,data) => {
                if(err) {
                    console.log('读取文件失败');
                }
                console.log(`${obj.name}读取文件成功`)
                fs.writeFile(path.join(__dirname,rootName,obj.name),data,(err) => {
                    if(err) {
                        console.log('写入文件失败');
                    }
                    console.log(`${obj.name}success`);
                })
            })
        }
    })
})