// class stack{

//     constructor(){
//         this.item= []
//         this.val=[]
      
    
//     }
//     push(element){

//        return this.item.push(element)

//     }
//     pop(){
//         return this.item.pop()
//     }
//     peak(){
//         return console.log(this.item[this.item.length-1]);
//     }

//     reverse() {
//         if (this.isEmty()) {
//           console.log('Stack is empty');
//         } else {
//           while (!this.isEmty()) {
//             this.val.push(this.pop());
//           }
//           console.log(this.val);
//         }
//       }

//       reqursiondelete(value) {
//         if (this.item.length === 0) {
//             return
//         }
    
//         const top = this.pop()
       
       
    
//         if (top !== value) {
//             this.val.push(top)
//             this.reqursiondelete(value)
//         }
    
//         this.item.pop(top)
//         this.item.push(this.val);
//           return [...this.item,...this.val]
       
      
//     }
//     even(){

//         if(this.item.length==0){

//             this.push(this.val)
            
//             return
//         }
        
//         const lastvalue= this.item[this.item.length-1]
//         if (lastvalue%2===0) {

//             this.val.push(lastvalue)
            
            
            
//         }
 
//         this.item.pop()
//         this.even()
//     }

//     replace(value, index) {
//         if (index >= 0 && index < this.size()) {
//           const tempStack = new stack();
//           console.log(tempStack);
    
         
//           for (let i = 0; i < index; i++) {
//             tempStack.push(this.pop());
//           }
    
       
//           this.pop();
//           this.push(value);
    
//           while (!tempStack.isEmty()) {
//             this.push(tempStack.pop());
//           }
//         } else {
//           throw new Error("Invalid index");
//         }
//     }


//     replaceval(val,re){

//       if (this.isEmty()) {
//         console.log('list is emty');     
//       }else{
//          for (let i = 0; i <this.item.length; i++) {
             
//          }
//       }
//     }



// class stack{

//   constructor(){

//     this.item=[]
    
//   }


//   push(value){
//      this.item.push(value)
//   }

//   pop(){
//     this.item.pop()
//   }

//   print(){
//     for (let i = 0; i <this.item.length; i++) {

//       console.log(this.item[i]);
//     }
//   }

// }


// const list= new stack()

// list.push(45)
// list.push(87)
// list.push(34)
// list.push(12)

// list.pop()

// list.print()


// class queu{

//   constructor(){
//     this.item=[]
//   }

//   enqueue(value){

//     this.item.push(value)

//   }

//   dequeue(){
//     this.item.shift()
//   }

//   print(){
    
//        console.log(this.item)
    
//   }
// }


// const list= new queu()
// list.enqueue(56)
// list.enqueue(67)
// list.enqueue(84)
// list.enqueue(12)
// list.dequeue()
// list.print()





// class linkedstack{
//    constructor(value){
//     this.value=value
//     this.next=null
//    }

// }

// class linkedlist{
//   constructor(){
//     this.top=null
//     this.size=0
//   }

//   isemty(){
//     return this.size===0
//   }
//   getsize(){
//     return this.size
//   }
  
//   push(value){

//     const node= new linkedstack(value)
//     if (this.isemty()) {
//        this.top= node
//     }else{
//        node.next= this.top
//        this.top= node
//     }
//     this.size++
//   }

//   print(){
//     if (this.isemty()) {
//       console.log('list is emty');
//     }else{
//       let curr= this.top
//       let list =''
//       while (curr) {
//         list+=curr.value+' '
//         curr=curr.next
//       }
//       console.log(list);
//     }
//   }

//   pop(){
//      if (this.isemty()) {

//       console.log('stack under flow');
      
//      }else{
//        this.top= this.top.next
//        this.size--
//      }
//   }
// }





// const listval= new linkedlist()

// listval.push(34)
// listval.push(24)
// listval.push(54)
// listval.push(76)
// listval.pop()


// listval.print()
    


    
      

//     middle(){
//         let len= this.item.length
//         let midd= Math.floor((len)/2)   
           
//             this.item.splice(midd,1)   
//          console.log(this.item);
//     }
//     size(){

//         return this.item.length

//     }
//     isEmty(){
//         return this.item.length===0
//     }
//     print(){
//        if(this.isEmty()) {
//         console.log('stack is emty');
//        }else{
//         console.log(this.item)
//        }
//     }

  
// }



// const list = new stack()

// list.push(11)
// list.push(20)
// list.push(23)
// list.push(40)
// list.push(39)
// list.replaceval(40,55)

// list.print()












// class Linkedlist{

//     constructor(value){
//         this.value=value
//         this.next= null

//     }

    
// }

// class LinkedStack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }

//     isEmty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }

//     push(value){
//         const node = new Linkedlist(value)
//         if(this.isEmty()){

//             this.top=node
//         }else{
//             node.next= this.top
//             this.top= node
//         }
//         this.size++
//     }

//     middel(){
//         if (this.isEmty()) {
//             console.log('list is emty');            
//         } else {

//             let midd= Math.floor((this.size)/2)

//            let curr= this.top
//             for (let i = 0; i < midd-1; i++) {

//                 curr= curr.next          
//             }
//             console.log(curr.next.value);
//             curr.next=curr.next.next
           
//             this.size--         
//         }
//     }

  




//     even(){
//       let curr = this.top

//         if (curr==null) {

//          return 
            
//         }else{
//             if (curr.value%2==0) {

//               console.log(curr.value);
                
                
            
//               this.pop()
//               this.even()
//             }
//         }

//         }
      

//     pop(){
//       if (this.isEmty()) {
//         console.log('stack underflow');
        
//       }
//       this.top=this.top.next
//       this.size--

//     }

//     print(){
//         let curr=this.top
//         let list=''
//         while (curr) {
//             list+=curr.value+' '
//             curr=curr.next
//         }

//         console.log(list);

//     }

//     reverse(value){

//     }


// }

// const listval= new LinkedStack()

// listval.push(67)

// listval.push(77)
// listval.push(88)





// listval.middel()

// listval.print()





// listval.print()
// console.log(listval.getsize());

