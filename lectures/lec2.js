//modules

console.log("inside the lec2");

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
console.log(add(10,20));
console.log(sub(10,20));

//if we want to use this file in another file we have to export this file anad for this we use modules in node js
//here add and sub is key and add and sub is value
module.exports={
    add:add,
    sub:sub
}