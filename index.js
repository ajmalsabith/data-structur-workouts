// const a = 6;
// const ary = [1, 2, 6, 3, 5, 8, 4, 2, 8, 6, 7, 6];
// let uniqueElements = [];
// let count=0
// for (let i = 0; i < ary.length; i++) {
//   let count = 0;

//   for (let j = 0; j < ary.length; j++) {
//     if (ary[i] === ary[j]) {
//       count++;
//     }
//   }

//   if (count === 1) {
//     uniqueElements.push(ary[i]);
//   }
// }
//   console.log(uniqueElements[1]);


// for (let i = 0; i < ary.length; i++) {
//     if(ary[i]%2==0){
//         count++
//     }
// }
// console.log(count);

// let flag
// for (let i = 0; i < ary.length; i++) {
//     flag=0
//    for (let j = 2; j < ary[i]; j++) {

//     if(ary[i]%j==0){
//         flag++
//         break
//     }
    
//    }
//    if (flag==0) {
//     console.log(ary[i]);
//    }
    
// }

// const str = 'Helloworld!';
// const arr = str.split('');
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// const str = arr.toString();
// console.log(str);


// const arr = [1, 2, 3, 4, 5];
// arr.push(9)
// const str = arr.join('');
// console.log(str);


let text = 'helloworld2023';
let updatedText = text.replace('3','4');

console.log(updatedText)


// const ary = [1, 2, 6, 3, 5, 8];
// const ary2 = [4, 11, 8, 33, 9, 0];


// for (i = 0; i < ary.length; i++) {

//     let count=0

//     for (j = 0; j < ary2.length; j++) {

//         if(ary[i]==ary2[j]){
//             count++
//         }
      

//     }
//     if(count==1){
//         console.log(ary[i]);
//     }

// }



// const arr=['salman','ajmal','fasil',1]

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i]==i){
//         console.log('yes='+arr[i]);
//     }else{
//         console.log('no intgers');
//     }
    
// }

// function findIntegers(array) {
//     return array.filter((element) => typeof element === 'number' && Number.isInteger(element));
//   }


//   const mixedArray = [1, 'two', 3, 'four', 5.5, 'six', 7];
//   const integers = findIntegers(mixedArray);
  
//   console.log('Integers in the array:', integers);
  

// list= [4,5,6,8,45,7,11]
// for (let i = 0; i < list.length; i++) {
//     flag=0
//    for (let j = 2; j <list[i]; j++) {

//     if(list[i]%j==0){
//         flag++
//     }
    
    
//    }

//    if (flag===0) {
//     console.log(list[i]);
    
//    }
    
// }

// array= [4,3,5,7,5]
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i]+1; j++) {
//         console.log(array[i])
        
//     }
// }

// array=[2,4,5,6,4,3,5,5]
// let count


// for (let i = 0; i < array.length; i++) {
//     count=true
//     for (let j =0; j < array.length; j++) {
       
//         if (array[i]===array[j]&& i!=j) {
             
//             count=false
//             break
            
            
        
            
//         }
        
//     }
//     if(count==false){
    
//         console.log(array[i]);
//     }
// }
