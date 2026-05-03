const maxNumber=(num)=>{

    let maxNum = [0]
    for(i=0;i<= num.length; i++){
        if(num[i]>=maxNum){
          maxNum=num[i]
        }
    }
    console.log(maxNum)
 }
 maxNumber([5,6,8,5,9,78,56])
