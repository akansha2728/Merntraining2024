var num=10;
let name="KIET";
const address="ghaziabad";
{
    var a=30;
    let b=40;
    console.log("B="+b);//local variable
}
console.log(num);
console.log(name);
console.log(address);
console.log("A=",a);
var a='10';
console.log(typeof a);


//FOR WHILE loop
for(let i=0;i<10;i++){
    console.log("Value of i:",i);
}
let j=0;
while(j<10){
    console.log("Value of j:",j);
    j++;
}

//IF ELSE statement
let a=10;
let b=20;
if(a>b){
    console.log("A is greater");
}
else{
    console.log("B is greater");
}

(a>b)?console.log("A is greater"):console.log("B is greater");

//SWITCH CASE
let n="kiet";
switch(n){
    case "kiet":console.log("KIET");break;
    case "MCA":console.log("MCA");break;
    default:console.log("Nothing");
}

//FUNCTION
function msg(){
    console.log("welcome to js normal function");

}
msg();
function sum(n1,n2){
    let sum=n1+n2;
    console.log("sum=",sum);
}
sum(10,20);

function mult(n1,n2){
    return n1*n2;
}
console.log("Multiply=",mult(10,20));

//EXPRESSIONAL FUNCTION

const msg=function message()   // it can be used as function(){};
{
    console.log("welcome to function expression");
};
msg();

//type-2
const sum=function(n1,n2)//const is used because function name is not given here
{
    let sum=n1+n2;
    console.log("Sum=",sum);
}
sum(23,45);

//type-3
const mul=function(n1,n2)
{
    return n1*n2;
};

console.log("Multiply=",mul(23,6));



//ARROW FUNCTION
const msg=()=>{
    console.log("welcome to arrow function")
};
msg();

//type-2
const sum=(n1,n2)=>console.log("sum="(n1+n2));
sum(23,56);

//type-3
const m=(n1,n2)=>n1*n2;
console.log("multiply=",m(23,56));


//type-4
const mul1=(n1,n2)=>{
    return n1*n2;  
}
console.log("multiply=",mul1(10,20));

const msg1=()=>{
    console.log("welcome to arrow func");
    console.log("welcome to arrow func");
    
};

//ARRAY IN JAVASCRIPT

//everything in javascript is object.
const msg=()=>console.log("arrow function");
let data=[10,20,50,60.56,70.2,'string',msg];
console.log(data);
data[6]();

//for loop
for(let i=0;i<data.length;i++){
  console.log(`value of ${i} is ${data[i]}`);}

//for in loop
 for(let index in data){
   console.log(`value of ${index} is ${data[index]}`)};
 
//for of loop
for(let value of data){
  console.log(`value of array=${value}`)};

 data.forEach(value=>console.log(`value of array=${value}`));


 //ARRAY MAP IN JAVASCRIPT
 let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log(`Value x 10 =${item*10}`));

let sumValue=value.reduce((a,b)=>a+b);//a,b=>0+1;
console.log(`sum of array value=${sumValue}`);


let evenNum=value.filter(item=>item%2===0);//=== is use for comapring similar datatyrpe value
console.log(evenNum);


//OBJECT IN JAVASCRIPT
let studentInfo={
    rollno:1,
    name:"Ravi kumar",
    course:"MCA",
    college:"KIET",
    marks:[10,23,45,67,78],
    music:()=>console.log("play music"),
    play:function playfunc(){console.log
        ("play cricket")},
}
console.log(studentInfo.marks);
console.log(studentInfo.music());
console.log(studentInfo.play());
studentInfo.marks.forEach(item=>console.log(item.name));

let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));







