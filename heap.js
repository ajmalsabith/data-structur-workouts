// class Heap{
//     constructor(){
//       this.Heap=[]
//     }
  
//   Parent(child){
//     return Math.floor((child-1)/2)
//   }
//   RightChild(parent){
//     return parent*2+2
//   }
//   LeftChild(parent){
//     return parent*2+1
//   }
//   upshift(){
//   var index = this.Heap.length-1
//   var parent = this.Parent(index)
//   while(this.Heap[index]>this.Heap[parent]){
//     this.swap(parent,index)
//     index=parent
//     parent= this.Parent(index)
//   }
  
//   return
  
//   }
//   insert(value){
//     this.Heap.push(value)
//     this.upshift()
//   }
  
//   swap(i,j){
//     let temp = this.Heap[i]
//    this.Heap[i] = this.Heap[j]
//    this.Heap[j] = temp
//   }
  
//   downshift(inx){
//     var maxIndex=inx
//     var rightChild = this.RightChild(inx)
//     var LeftChild = this.LeftChild(inx)
//   if(this.Heap[maxIndex]<this.Heap[LeftChild]) {
//     this.swap(maxIndex,LeftChild)
//       maxIndex = LeftChild
//     }else if(this.Heap[maxIndex]<this.Heap[rightChild]){
//       this.swap(maxIndex,rightChild)
//       maxIndex = rightChild
//     }else{
    
//       return 
//     }
//     this.downshift(maxIndex)
//   }
//   delete(){
//     let root  = this.Heap[0]
//     this.Heap[0] = this.Heap.pop()
//     this.downshift(0)
//     return root
//   }
  
//   display(){
//     console.log(this.Heap);
//   }
 
//   sort(){
//     let j=[]
//     for(let i = this.Heap.length-1 ; i>=0 ; i--){
      
//         this.swap(0,i)
//   j.unshift(this.Heap.pop())
//   this.downshift(0)
    
//     }
//     [...this.Heap] = [...j]
//     j=[]
//   }
//   }
  
  
  
//   const heap = new Heap()
//   heap.insert(7)
//   heap.insert(4)
//   heap.insert(8)

  
//   heap.insert(9)
//   heap.insert(78)

  
//   heap.display()



// class heap{
//     constructor(){
//         this.heap=[]
//     }

//     parent(chaild){
//         return Math.floor((chaild-1)/2)
//     }

//     chaildleft(parent){
//         return parent*2+1
//     }
//     chaildright(parent){
//         return parent*2+2   
//     }

//     insert(value){
//         this.heap.push(value)
//         this.shiftup()
//     }
//     swap(i,j){
//         let temp = this.heap[i]
//         this.heap[i]=this.heap[j]
//         this.heap[j]= temp
//     }

//     shiftup(){
//         let index= this.heap.length-1
//         let parent= this.parent(index)
//         while (this.heap[index]>this.heap[parent]) {
//             this.swap(index,parent)
//             index= parent
//             parent= this.parent(index)
//         }

//         return

//     }

//     shiftdown(index){
//         let idx=index
//         let left= this.chaildleft(idx)
//         let right= this.chaildright(idx)
//         if (this.heap[left]>this.heap[right]) {

//             while (this.heap[left]>this.heap[idx]) {
//                 this.swap(idx,left)
//                 idx= left
//                 left= this.chaildleft(idx)
//             }
//             return
            
//         }else{
//             while (this.heap[right]>this.heap[idx]) {
//                 this.swap(idx,right)
//                 idx= right
//                 right= this.chaildright(idx)
//             }
//             return
//         }


//     }
//     delete(){

//         let index= this.heap.length-1
       
//           this.swap(index,0)
//           this.heap.pop()
//           this.shiftdown(0)

//     }
//     display(){
//         console.log(this.heap);
//     }
// }

// const list= new heap()

// list.insert(23)

// list.insert(43)
// list.insert(56)
// list.insert(22)
// list.insert(76)
// list.insert(12)
// list.insert(99)

// list.delete()
// list.display()


class heap{

    constructor(){
        this.heap=[]
    }
    
    parent(chaild){
       return Math.floor((chaild-1)/2)
    }
    childleft(parent){
        return parent*2+1
    }
    childright(parent){
        return parent*2+2
    }
    insert(value){
        this.heap.push(value)
        this.shiftup()
    }
    shiftup(){
        let index=this.heap.length-1
        let parent= this.parent(index)
        while (this.heap[index]>this.heap[parent]) {

            this.swap(index,parent)
            index=parent
            parent= this.parent(index)
            
        }

        return 
    }

    swap(i,j){
        let temp=this.heap[i]
        this.heap[i]= this.heap[j]
        this.heap[j]=temp
    }
    delete(){
        let idx= this.heap.length-1
        this.swap(idx,0)
        this.heap.pop()
        this.shiftdown(0)

    }

    shiftdown(index){

        let idx= index
       let left= this.childleft(idx)
       let right= this.childright(idx)
       if (this.heap[left]>this.heap[right]) {
         while (this.heap[left]>this.heap[idx]) {

            this.swap(idx,left)
            idx=left
            left= this.childleft(idx)
            
            
         }
        
       }else{
        while (this.heap[right]>this.heap[idx]) {

            this.swap(idx,right)
            idx=right
            right= this.childleft(idx)
            
            
         }
       }

    }

    display(){
        console.log(this.heap);
    }
    sorttt(){
            let j=[]
            for(let i = this.heap.length-1 ; i>=0 ; i--){
              
                this.swap(0,i)
          j.unshift(this.heap.pop())
          this.shiftdown(0)
            
            }
           return [...j]
            
     }

     sorttt(){
            let j=[]
            for(let i = this.heap.length-1 ; i>=0 ; i--){
              
                this.swap(0,i)
          j.unshift(this.heap.pop())
          this.shiftdown(0)
            
            }
           return [...this.Heap] = [...j]
            j=[]
          }
          
          sort() {
            const sortedArray = [];
            while (this.heap.length > 0) {
              this.swap(0, this.heap.length-1 );
              sortedArray.unshift(this.heap.pop());
              this.shiftdown(0);
            }
            this.heap = sortedArray;
            return this.heap;
          }
          
    
}

const heape= new heap()
heape.insert(32)
heape.insert(6)
heape.insert(23)
heape.insert(22)
heape.insert(89)
heape.insert(7)
heape.insert(30)
console.log(heape.sort()); 

heape.display()

