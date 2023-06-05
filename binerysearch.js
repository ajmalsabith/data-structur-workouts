
// const list=[1,2,3,4,5,6,7,8,9]
// const num=8

// let left=0
// let right=list.length-1


// while (left<=right) {

//     let middle= Math.floor(left+right)/2
//     if(num === list[middle]){
//         console.log('number find it'+middle);
//         break
//     }else if(list[middle]>num){
//        right= middle-1
//     }else{
        
//         left=middle+1
//     }
    
        
// }   
// if(left>right){
//     console.log('value not found');
// }

// function search (arr,tar){
//     let leftindex = 0
//     let rightindex = arr.length-1
//     while(leftindex <= rightindex){
//         middleindex = Math.floor((leftindex+rightindex)/2)
//     if(tar === arr[middleindex]){
//         return middleindex;
//     }if(tar < arr[middleindex]){
//         rightindex=middleindex-1
//     }else{
//         leftindex=middleindex+1
//     }
//     }return -1
    
// }

//  console.log(search([1,2,3,4,5],2));
//  console.log(search([1,2,3,4,5],4));
//  console.log(search([1,2,3,4,5],8));


// function recrusivesearch(arr , tar){
//     return search(arr,tar,0,arr.length-1);
// }

// function search(arr,tar,leftindex,rightindex){
//     if(leftindex > rightindex){
//      return -1;
//     }
//     let middleindex = Math.floor((leftindex+rightindex)/2);
//     if(tar === arr[middleindex]){
//         return middleindex;
//     }if(tar < arr[middleindex]){
//         return search(arr,tar,leftindex,middleindex-1);
//     }else{
//         return search(arr,tar,middleindex+1,rightindex)
//     }
// }

// console.log(recrusivesearch([1,2,3,4,5],3));
// console.log(recrusivesearch([1,2,3,4,5],4));
// console.log(recrusivesearch([1,2,3,4,5],8));



// function search(arr,num){
//   let  left=0
//    let right=arr.length-1

//     while (left<right) {
//      let middle= math.floor()   
        
//     }
// }


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

   
// }
// class LingedList{
//      constructor(){
//         this.head=null
//         this.size=0
//      }

//      isEmty(){
//         return this.size===0
//      }
//      getsize(){
//        return this.size
//      }

//      prepand(value){
//         const node= new Node(value)

//         if(this.isEmty()){
//             this.head=node
//         }else{
//             node.next = this.head
//             this.head= node
//         }
//         this.size++

//      }

   
//      print(){
//         if(this.isEmty()){
//             console.log('list is emty')

//         }else{
//              let curr = this.head
//              let listvalues=''
//              while (curr) {
//                 listvalues+= `${curr.value}`+" "    
//                 curr=curr.next
                
//              }  
//              console.log(listvalues);

            
//             }
//     }

//     appand(value){
//         const node= new Node(value)
//         if(this.isEmty()){
//             this.head=node
//         }else{
//             let prev= this.head
//             while (prev.next) {

//                 prev=prev.next
                
//             }
//             prev.next=node
         

//         } 
//           this.size++
//     }

//     insertindex(value,index){
//         if(index<0 || index>this.size){
//             return -1
//         }
//         const node= new Node(value)
//         if(index===0){
//             this.prepand(value)
//         }else{
//             let prev=this.head
//             for (let i = 0; i < index-1; i++) {
//                 prev=prev.next
                
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++


//         }
//     }


//     indexremove(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removenode
//         if(index===0){
//             removenode=this.head
//             this.head=this.head.next
//             this.size--
//         }else{
//            let prev= this.head
//             for (let i = 0; i < index-1; i++) {
//                   prev= prev.next
                
//             }
//             removenode=prev.next
//             prev.next= removenode.next
//             this.size--
//         }
//     }

//     valueremove(value){
//         if(this.isEmty()){
//             return
//         }
//         let removenode 
//         if(value===this.head.value){
//              removenode =this.head
//             this.head= removenode.next
//             this.size--
            
//         }
//         else{
//             let prev=this.head
//             while (prev.next && prev.next.value!==value) {
//               prev=prev.next  
//             }
//             if(prev.next){
//                 removenode =prev.next
//                 prev.next=removenode.next
//                 this.size--
//             }

//         }


//     }

//     sumfirstlastmiddle(){
//         if (this.isEmty()) {
//             return 
            
//         }
//         let left=0
//         let right=this.size-1
//         let middle= Math.floor(left+right)/2
//        let posmiddle
//        let first=this.head.value
//       let curr=this.head
//        while (curr.next) {
//              curr=curr.next
//        }
//        let last=curr.value
//        let prev=this.head
//        for (let i = 0; i <middle ; i++) {
//                   prev=prev.next
//        }
//        posmiddle= prev.value
//        let sum= posmiddle+last+first
//        return sum

//     }

//     prime(){
//         if(this.isEmty()){
//             return
//         }else{
           
//             let curr=this.head
//             let flag=true
//             while (curr) {
//                    flag=true
//                 for (let i = 2; i <curr.value; i++) {
//                     if (curr.value%i==0) {
//                         flag=false
//                         break

//                     }
                       
//                 }
//                   let list=[]
//                 if (flag===true) {

//                       return list+=curr.value            
//                 }
//                 curr=curr.next
                
                
//             }
//         }
//     }



// }


// const list= new LingedList()

// list.prepand(10)
// list.prepand(30)

// list.prepand(20)
// list.prepand(10)

// const log=list.prime()
// console.log(log);


// list.print()



// function search(arr,tar){
   
//     let left=0
//     let right=arr.length-1
//     let middle
//     while (left<=right) {
        
//          middle= Math.floor((right+left)/2)
//          if(arr[middle]===tar){
//             console.log('middle is '+middle+'position')
//             break
//          }else if(arr[middle]>tar){
//             right=middle-1
//          }else{
//             left=middle+1
//          }
//     }
//     if (left>right) {
//         console.log('value not found')
//     }
// }

// var arrr=[23,45,67,68,76,87,89,99]

// search(arrr,67)


// function search(arr, tar){

//     let left=0
//     let right= arr.length-1
    
//     while(left<right){
//         let middle= Math.floor((left+right)/2)
//         if(arr[middle]===tar){
//             console.log('number find it '+middle+'postion');
//             break
//         }else if(arr[middle]>tar){
//             right=middle-1
           

//         }else{
//             left=middle+1
            
//         }
//     }
//     if (left>right) {
//         console.log('number not found');
        
//     }
    
// }

// search([1,2,3,4,5,6,7],6)



//  function reqrsionsearch(arr,tar){
    
//     return search(0,arr.length-1,arr,tar)
// }

//   function search(left,right,arr,tar){
//     if (right<left) {

//         return -1
        
//       }
//        let middle= Math.floor((right+left)/2)
//        if (arr[middle]===tar) {
//         return middle
//        }else if(arr[middle]>tar){

//         return  search(left,middle-1,arr,tar)

//        }else{
//         return  search(middle+1,right,arr,tar)
    
      
//        }
    

//    }

//  const lod=  reqrsionsearch([1,2,3,4,5,6,7,8,9],7)
//  console.log(lod);