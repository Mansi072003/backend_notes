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
const PORT = 4444;
const path=require("path")
const hbs=require("hbs")
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
const { v4: uuidv4 } = require('uuid')
app.get("getblogs",(req,res)=>{
  res.render("blogpage",{
  blogs
  });
})

let task=[];
let blogarr=[];


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

app.post("/addblogs",(req,res)=>{
  const {author,category,blog} =req.body;
  const obj={

    author,// author:author,
    category,// category:category,
    blog,// blog:blog
    blogId:uuidv4()
  }
  blogarr.push(obj);
   // console.log(req.body);
  // console.log(author,category,blog);
  // res.send(blogarr);
  res.redirect("/getblogs");
})

app.get("/delete/:blogId",(req,res)=>{//when we hit this object comes in params
  // console.log(req.params.blogId);
  blogarr=blogarr.filter((item)=>item.blogId!=req.params.blogId);
  res.redirect("/getblogs");
})


//delete blog

app.get("/getblogs",(req,res)=>{
  res.render("blogpage",{
    blogarr
    // firstName:"Mansi" ,
    // lastName:"Tiwari",
  });
})  

app.get("/update/:blogId",(req,res)=>{
  console.log(req.params);
  updateblog=blogarr.filter((item)=>item.blogId==req.params.blogId);
  // const blog=blogarr.find((item)=>item.blogId==req.params.blogId);
  console.log(updateblog);
  res.render("updateblog",{
    updateblog:updateblog[0]
  })
  
})

app.post("/updateblog",(req,res)=>{
  const {name,Class,blog,blogId}=req.body;
 const newObj={
  name:name,

 }

})


app.listen(PORT, () => {//listen use to start and moniter request 
  console.log("http://localhost:" + PORT);// local machine address
}); 