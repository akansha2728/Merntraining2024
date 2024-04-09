
const print=(msg)=>{
    console.log(msg);
}
// sum is higher order func and print is call back func
const sum=(num1,num2,print)=>{
    let s=num1+num2;
    
    print(s);
}

sum(10,20,(sum)=>{
    if(sum>20){
        console.log("greater tahn 20")
    }else{
        console.log("less than zero")
    }
})
print(msg);