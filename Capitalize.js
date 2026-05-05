const capitalizeWords = (data) => {

    trimData = data.trim()
    console.log(trimData)
let final =""
    for (i = 0; i < trimData.length; i++) {
        if (i === 0 || trimData[i - 1] === " "){

            let result = trimData[i].toUpperCase();
            final += result
   
        } else {
            let result = trimData[i]
            final += result
        }
    }
         console.log(final)
}
capitalizeWords("   syed muhammad abdullah");