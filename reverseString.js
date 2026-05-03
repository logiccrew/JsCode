// first Way

 const reverseString=(str)=> {
    const Result= str.split("").reverse().join("")
    console.log(Result)
 }
 reverseString("Hello")

// Second Way 

const secondReverseString = (str) => {
    let reversed = ""
    for(i = str.length - 1 ; i>=0 ; i--) {
      reversed += str[i]
    }
    console.log(reversed)
}
secondReverseString("Syed Muhammad Abdullah")


 

 