const path = require("path");
const fs=require("fs");
const filehandling = "this is a text"


const filePath=path.join(__dirname,'filehandling','file.txt');
fs.writeFile(filehandling,filePath,(err) => {
    if(err){
        console.error("error creating file",err);
    }
    else{
        console.error("creating a file successfully");
    }
}
);