const flatten = (data, depth) => {

    result = []
    for (i = 0; i < data.length; i++) {
        if (Array.isArray(data[i]) && depth > 0) {
            result = result.concat(flatten(data[i], depth - 1))
        } else {
            result.push(data[i]);
        }
    }
   return result

}
const arr = [1, [2, [3, [4]]]];
console.log(flatten(arr, 2))