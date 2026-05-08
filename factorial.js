const factorial = (num) => {
result=1
    if(num > 0){
for(i=1; i <= num; i++) {
    result*=i

    
}
    }else{
        console.log("Enter the Number Greater than 0.")
    }
    console.log(result)
}

factorial(9)