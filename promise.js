
let age = 20;
const info = new Promise((resolve, rejet) => {
    if (age > 18) {
        resolve("you can vote");
    } else {
        reject("you can not vote");
    }
})
// resolve and reject are two func pass in info
info.then(result => console.log(result))
    .catch(error => console.log(error));

//old method of catching
const resultInfo = async () => {
    try {
        let result = await info;
        console.log(result);
    }catch(error){
        console.log(error);
    }
 }
resultInfo();