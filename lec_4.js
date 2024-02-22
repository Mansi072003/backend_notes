// express is a  simple Frame work
// framwork vs library
// -----------------------------------framewokr----------------------------------------------------
// 1. it have det of rules which we have to follow to acheive a task
// 2. they are very rigid
// -----------------------------------Library----------------------------------------------------
// 1.Don't have any rule
// 2. library are flexible
// -----------------------npm----------------------------------------------------
// npm stands for Node Package Manager
// It is used to install and manage the packages that helps in developing node applications
const { log } = require("console");
const express = require("express");
const app = express();//making instance
const PORT = 5001;
const path=require("path")
const hbs=require("hbs")
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
const { v4: uuidv4 } = require('uuid')
app.get("getblogs",(req,res)=>{
  res.render("blogpage",{
  blogarr
  });
})

let task=[];
let blogarr=[];

//mongoose
const mongoose=require("mongoose");
const { Schema } = mongoose;

//here we define blog schema
const blogSchema=new Schema({
  name:String,
  Class:String,
  blog:String,
  blogId:String
})

//we create model from schema so that we can perform operation on database
//mongoose.model return object which have various method to perform operation on database

const Blog=mongoose.model("Blog",blogSchema);

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.set("view engine","hbs");//hbs is template engine


app.use("/", (req, res,next) => {
  //   res.send("Response ");
  console.log("Middleware");//that work on every request
  next();
});

// app.get("/path2",(req,res) =>{
//   console.log(req.query);
// });


app.get("/path/:name/:class", (req, res) => {

  console.log(req.params)
 res.send(`Hello ${req.params.name}`);

})

// app.get ("/path/abhishek",(req,res)=>{
//   res.send("Hello Abhishek");
// })


// app.get("/path2",(req,res) =>{
//   console.log(req.query);
//   res.send(req.query);
// });

// app.post("/addtask",(req,res)=>{
//   console.log(req.body);
//   task.push(req.body);
//   res.redirect("/gettask");//redirect tp gettask only
  
// })

// app.get("/gettask",(req,res)=>{
//   res.send(task);
// })  
// app.get("/", (req, res, next) => {
// //   res.send("Response from server");
//   res.sendFile(path.join(__dirname,"index.html"))
// });
app.get("/addtasks", (req,res)=>{
  console.log(req.query);
  res.send("data received");
})

app.post("/addblogs",async(req,res)=>{
  const {name,Class,blog} =req.body;
  const obj={

    name,// author:author,
    Class,// category:category,
    blog,// blog:blog
    blogId:uuidv4()
  }
  await Blog.create(obj);
  res.redirect("/getblogs");



  blogarr.push(obj);
   // console.log(req.body);
  // console.log(author,category,blog);
  // res.send(blogarr);
 
})

app.get("/delete/:blogId",async(req,res)=>{//when we hit this object comes in params
  // console.log(req.params.blogId);
  blogarr=blogarr.filter((item)=>item.blogId!=req.params.blogId);
  let blogId=req.params.blogId;
 await Blog.deleteOne({blogId});
  res.redirect("/getblogs");
})


//delete blog

app.get("/getblogs",async (req,res)=>{
  let blogs=await Blog.find();
  res.render("blogpage",{
    blogarr:blogs
    // firstName:"Mansi" ,
    // lastName:"Tiwari",
  });
})  

app.get("/update/:blogId",async (req,res)=>{
  console.log(req.params.blogId);
  // updateblog=blogarr.filter((item)=>item.blogId==req.params.blogId);
  // const blog=blogarr.find((item)=>item.blogId==req.params.blogId);
  // console.log(updateblog);
  let updateblog= await Blog.find({blogId:req.params.blogId});
  // console.log(updateblog);
  res.render("updateblog",{
    updateblog:updateblog[0]
  })
  
})


app.post("/updateblog",async(req,res)=>{
  const blogId = req.body.blogId;
  // console.log(req.body);
  // console.log(blogId);
//   const {name,Class,blog,blogId}=req.body;
//  const newObj={
//   name,
//   Class,
//   blog,
//   blogId

//  }
 await Blog.updateOne({blogId},req.body);
//  blogarr=blogarr.map((item)=>{
//   if(item.blogId==blogId){
//     return newObj
//  }

//  return item


// })
res.redirect("/getblogs");
})

mongoose.connect("mongodb://localhost:27017/blogs")
.then(() => {
  app.listen(PORT, () => {
    // 3000 is port number
    console.log("http://localhost:" + PORT); // http://localhost:3000
  }); // it will start the server  // it will run only once
  
})

//we define schema and model in mongoose so that we can structure our data

