function primary(){
    setTimeout(() => {
        console.log('primary working...');
        secondary();
        },3000);
}

function secondary(){
    setTimeout(() => {
        console.log('secondary working...');
        tertiary();
    },3000);
    
}

function tertiary(){
    setTimeout(() => {
        console.log('tertiary working...');
    },3000);

}
primary();