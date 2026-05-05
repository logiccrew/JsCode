// Merge two objects (shallow)
const mergeObj=(data1,data2)=>{

    const merge ={ ...data1, ...data2}
    console.log(merge)

}
mergeObj({a:1},{c:"Syed Muhammad Abdullah"})

const mergeObjects = (obj1, obj2) => {
  const result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }

  for (let key in obj2) {
    result[key] = obj2[key];
  }

  return result;
};

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));