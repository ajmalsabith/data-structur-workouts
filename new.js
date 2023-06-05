
function quick(arr){


    if (2>arr.length) {

        return arr
        
    }


    let left= []
    let right=[]

    let provt= arr[arr.length-1]

     for (let i = 0; i < arr.length-1; i++) {
        
        if (arr[i]<provt) {

            left.push(arr[i])
            
        }else{
            right.push(arr[i])
        }
        
     }

     return quick(left).concat(provt,quick(right))

}


console.log(quick([2,7,-1,9,5,4,-3]));
