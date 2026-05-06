const filter = (data, filterNum) => {
    let filterData = []
    for (i = 0; i < data.length; i++) {
        if (data[i] != filterNum) {
            filterData.push(data[i])
        }
       
    }
     console.log(filterData)
}
filter([10, 5, 20, 8, 35, 8, 8, 9, 8, 99, 55, 8, 7, 4, 7, 5, 8, 2, 3, 6, 44, 5, 23, 99, 99, 91, 2], 8)