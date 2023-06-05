// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

// }

// class LingedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }

//     prepend(value){
//         const node=new Node(value)
//         if (this.isEmty()) {

//             this.head=node
            
//         }else{
//             node.next=this.head
//             this.head= node
//         }
//         this.size++
//     }

//     print(){
//         if (this.isEmty()) {
//             console.log('list is null');
            
//         }else{
//             let curr=this.head
//             let listval=''
//             while (curr) {

//                 listval+=`${curr.value}`+' '
//                 curr=curr.next
//             }
//             console.log(listval);
//         }
//     }


//     convertarray(arr){


//         for (let i = 0; i < arr.length; i++) {
//             const node=new Node(arr[i])

//             if (this.isEmty()) {
//                 this.head=node
                
//             }else{
//                 node.next=this.head
//                 this.head=node
//             }

//             this.size++


            
            
//         }
//     }
// }

// const list = new LingedList()

// list.convertarray([1,2,3,4,5,6,7])

// list.print()


let text ='helloworld'

const revers= text.split('').reverse().join('')
console.log(revers);