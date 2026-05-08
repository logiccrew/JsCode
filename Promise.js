const Promise1 =()=>{
    new Promise ((resolve,reject)=>{
        setTimeout(()=>{
resolve()
        },1000)
    }).then(()=>{
        console.log("done")
    })
}
Promise1()