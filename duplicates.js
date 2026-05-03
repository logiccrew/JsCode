const removeDuplicates = (data) => {

    let newData = []
    let repeatedData = []

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data.length - 1; j++) {
            if (data[j] > data[j + 1]) {
                maxNum = data[j]
                data[j] = data[j + 1]
                data[j + 1] = maxNum
            }
        }
    }
    console.log(data)
    for (k = 0; k < data.length; k++) {
        if (data[k] != data[k + 1]) {

            newData.push(data[k])
            newData

        } else{

            repeatedData.push(data[k])
        }

    }
    console.log(repeatedData)
    console.log(newData)






}
removeDuplicates([10, 5, 20, 8, 35, 8, 8, 9, 8,99,55,8,7,4,7,5,8,2,3,6,44,5,23,99,99,91,2])