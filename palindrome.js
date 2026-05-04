const palindrome = (data) => {
reverse = ""
    for(  i = data.length - 1 ;i>=0 ; i-- ){
        reverse += data[i]
        
    }
    console.log(reverse)
    if(reverse === data){
        console.log("Your String is palindrome ")
    }else{
        console.log("Your String is not palindrome ")
    }
}
palindrome("racecar")