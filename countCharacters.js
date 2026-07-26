const countChars = (data) => {
    const splitData = []
    let count = 1
    let repeatedData = {}

    for (i = 0; i < data.length; i++) {
        splitData[i] = data[i]

    }
    console.log(splitData)
    for (j = 0; j < splitData.length; j++) {
        for (k = 0; k < splitData.length - 1; k++) {
            if (splitData[k] >= splitData[k + 1]) {
                let checkValue = splitData[k]
                splitData[k] = splitData[k + 1]
                splitData[k + 1] = checkValue

            }
        }

    }
    console.log(splitData)
    console.log("Sorted:", splitData.join(""));
    for (l = 0; l < splitData.length; l++) {
        console.log(count)
        if (splitData[l] === splitData[l + 1]) {
            count += 1;
        } else {
            repeatedData[splitData[l]] = count;
            count = 1;
        }
    }
    console.log(repeatedData)
}
countChars("aaaaallmsnkncoianviavocnc")