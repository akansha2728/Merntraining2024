//rest parameters
const sum=(num1,num2,...numbers)=>{
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of numbers=",(num1+num2+s));

}
sum(5,6,6,7,8,9);
// if num1,num2 both are zero then output is 0 and if array does not contain element then output is NaN ,num1 and num2 are default parameters