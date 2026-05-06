const groupArray = (data) => {

    let result = {}
    for (i = 0; i < data.length; i++) {

        let key = data[i].city
    if (!result[key]) {
      result[key] = [];
    }

   result[key].push(data[i]);

    }
    return result
}
console.log(groupArray([{city:"NY"},{city:"LA"},{city:"NY"}]))