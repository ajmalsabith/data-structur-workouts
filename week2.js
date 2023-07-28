
 //:insertion sort

// let array=[75,4,6,44,88,66,9,87,23,1,90,3]

// for (let i = 0; i < array.length; i++) {
     
//     let current=array[i]
//     let j= i-1
//     while (j>=0 && array[j]>current ) {

//         array[j+1]=array[j]
//         j--    
//     }
//     array[j+1]=current


   
    
// }
// console.log(array);


// function insertionsort(array){

//     for (let i = 1; i < array.length-1; i++) {
//        let current= array[i]
//        let j= i-1

//        while (j>=0 && array[j]>current) {

//         array[j+1]=array[j]
//         j--
        
//        }

//        array[j+1]=current
        
//     }

//     console.log(array);

// }

// insertionsort([4,2,9,5,-3,-8,11])


// :bubble sort 


// function bubble(array){

//     for (let i = 0; i < array.length-1; i++) {

//         for (let j = 0; j < array.length-1-i; j++) {
//             if (array[j]>array[j+1]) {

//                 let temp= array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
                
//             }
//         }
       
//     }
//     console.log(array);

// }


// bubble([34,56,83,23,3,9,55])


// let array=[75,4,86,44,88]

// do{
//     var swap=false
//     for (let i = 0; i < array.length-1; i++) {
//         if (array[i]>array[i+1]) {
//             let temp = array[i+1]
//             array[i+1]=array[i]
//             array[i]=temp
//             swap=true
//         }
//     }
// }while(swap==true){
//     console.log(array);
// }

// function bubble(array){

// let succ
//     do {
//          succ=false
        
//     for (let i = 0; i < array.length-1; i++) {
//         if (array[i]>array[i+1]) {
 
//          let temp= array[i]
//          array[i]= array[i+1]
//          array[i+1]=temp
//          succ=true
//         }
        
//      }
        
//     } while (succ){
//         console.log(array);
//     }

// }

// bubble([7,6,2,-1,8,2,-4,9])



//  :selections Sort


// let array=[75,4,-6,44,88,66,-9,87,23,1,90,3]

// for (let i = 0; i < array.length; i++) {
    
//     for (let j = i+1; j < array.length; j++){
//         if (array[i]>array[j]) {

//             let temp= array[i]
//             array[i]=array[j]  
//             array[j]=temp          
//         }
       
//     }
//     console.log(array);
    
// }


// function selectionsort(array){

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i]>array[j]) {
//                 let temp= array[i]
//                 array[i]=array[j]
//                 array[j]=temp
                
//             }
            
//         }

//         console.log(array[i]);
        
//     }
// }


// selectionsort([2,8,3,0,-5,9,23])

//:quick sort 

// function quicksort(arr){

//     let left=[]
//     let right=[]

//     let pivo=arr[arr.length-1]
   
//     if (2>arr.length) {

//         return arr
        
//     }
   
//     for (let i = 0; i < arr.length-1; i++) {
       

//         if (arr[i]<pivo) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
       
//     }
    
//     return quicksort(left).concat(pivo,quicksort(right))
  
// }

// console.log(quicksort([2,6,3,9,7,4]));

//  :merge sort


// function mergsort(arr){

//     if (arr.length<2) {
//         return arr
//     }

//     let midd= Math.floor((arr.length)/2)
//     let left=arr.slice(0,midd)
//     let  right= arr.slice(midd)

//     return merge(mergsort(left),mergsort(right))

//     function merge(left,right){

//         list=[]

//      while (left.length && right.length) {

        

//         if (left[0]<right[0]) {

//            list.push(left.shift())
            
//         }else{
//             list.push(right.shift())
//         }
        
//      }
//      return [...list,...left,...right]
//     }
// }
// console.log(mergsort([2,4,1,8,66,-4,99,5])); 


// function quick(arr, f, l) {
//   if (f < l) {
//     let part = partition(arr, f, l);
//     quick(arr, f, part - 1);
//     quick(arr, part + 1, l);
//   }
//   return arr
// }

// function partition(arr, f, l) {
//   let pivot = arr[l];
//   let j = f-1;

//   for (let i = f ; i <= l; i++) {
//     if (arr[i] < pivot) {
//       j++;
//       swap(arr, i, j);
//     }
//   }

//   swap(arr, j+1, l);

//   return j+1;
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// var arr = [3,8,9,67,45,90,6,5,33]
// var b =    quick(arr,0,arr.length-1)
// console.log(b);



// function mergesort(arry){


//     if (2>arry.length) {

//         return arry
        
//     }

//     let mid= Math.floor((arry.length)/2)
//      let right=arry.slice(0,mid)
//      let left=arry.slice(mid)

//      return merge(mergesort(left),mergesort(right))

//      function merge(left,right){

//         let list=[]

//        while (left.length && right.length) {

//         if (left[0]<right[0]) {

//             list.push(left.shift())
            
//         }else{
//             list.push(right.shift())
//         }
        
//        }

//        return [...list,...left,...right]
//      }

// }

// let arry= [3,7,1,9,55,98,12,5,66]

// console.log(mergesort(arry)); 



// function mergesort(arr){
//     if (2 > arr.length) {

//         return arr
        
//     }
    
//     let mid= Math.floor((arr.length)/2)
//     let right= arr.slice(0,mid)
//     let left= arr.slice(mid)

//     return merge(mergesort(left),mergesort(right))

//     function merge(left,right) {

//         let list= []

//         while (left.length && right.length ) {

//             if (left[0]<right[0]) {

//                 list.push(left.shift())
                
//             }else{
//                 list.push(right.shift())
//             }
            
//         }

//         return [...list,...left,...right]
        
//     }
// }


let arr= [3,7,1,9,55,98,12,5,66]

// console.log(quick(arr)); 


//  function quick(arr){
//     let right=[]
//     let left=[]

//     let pivot= arr[arr.length-1]


//     if (2> arr.length) {
//         return arr
        
//     }

//     for (let i = 0; i < arr.length-1; i++) {
//        if (arr[i]<pivot) {
//            left.push(arr[i])
//        }else{
//            right.push(arr[i])
//        }
        
//     }

//     return quick(left).concat(pivot,quick(right))
// }





//  for (let i = 0; i < arr.length; i++) {
//    let current= arr[i]

//    let j= i-1
//     while (j>=0 && current<arr[j]) {

//         arr[j+1]=arr[j]
//         j--
        
//     }
//     arr[j+1]=current

//  }
// console.log(arr);



// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < arr.length-1-i; j++) {
//         if (arr[j]>arr[j+1]) {

//             let temp= arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
            
//         }
        
//     }
// }
// console.log(arr);



