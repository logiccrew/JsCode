const spaceCal = (data) => {
    finalResult = ""
    for (i = 0; i < data.length; i++) {
        if (data[i] != " ") {
            finalResult += data[i]
            console.log(finalResult)
        }
    }
}
spaceCal("    Syed Muhammad Abdullah")