//Find the index of an element in an array (manual loop, no indexOf)
const indexFunc = (data) =>{
let result={}


for (i=0 ; i < data.length ; i++){
    
    result[data[i]] = i
}
console.log(result)
}
indexFunc([10, 5, 20, 8, 35,9])