// Arrow functions in JavaScript are a concise way to write anonymous functions. They have a shorter syntax compared to traditional function expressions.

function compressing(Uploading, taskcompleted) {
    setTimeout(()=>{
        console.log('Compressing the video...');
        Uploading(taskcompleted);
    }, 3000);
}

compressing((taskcompleted)=>{
    setTimeout(()=> {
        console.log('Uploading the video...');
        taskcompleted();
    },3000);
}
,
()=>{
    setTimeout(()=> {
        console.log('task completed...');     
    },3000);
}
)


