function compressing(upload){
    setTimeout(() => {
        console.log('Compressing the video...');
        upload(taskcomplete);//calling the uploading function
        },3000)//we apply set time out to showcasing the delay time in compressing 
    
}
function uploading(){
    setTimeout(() => {
        console.log('Uploading the video...');- 
        taskcomplete();//calling the taskcomplete function
    },3000)

}
function taskcomplete(){
    setTimeout(() => {
        console.log('Task completed...');},3000)

}
//calling first compressing function in this we passes the upcoming funciton to be performed
compressing(uploading);//callback function 



