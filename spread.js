const sum=(num1,num2,num3)=>{
    console.log("sum=",(num1+num2+num3))
}
//sum(12,13,14) output-39

let value=[20,30,50];
sum(...value); //here ... is spread operator

//sum(value) output is - 12,13,14 undefined ,becoz num1 takes whole array