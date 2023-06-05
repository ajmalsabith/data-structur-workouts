class Node{

    constructor(value){
        this.value=value
        this.next=null;
    }
}


class LinkedList {

    constructor(){
        this.head= null
        this.size=0
    }

    isEmpty(){
        return this.size===0

    }
    getsize(){
        return this.size 
    }

    prepend(value){
       const node= new Node(value) 
       if(this.isEmpty()){
        this.head=node
       }else{
        node.next= this.head
        this.head=node
       } 
       this.size++ 

    }

    append(value){

        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
          let prev= this.head
          while (prev.next) {
            prev= prev.next
          }
          prev.next=node

        }
        this.size++


    }
    insert(value,index){
        if(index<0 || index>this.size ){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
             const node= new Node(value)
             let prev= this.head
             for (let i=0;i<index-1;i++){
                prev=prev.next
             }
             node.next=prev.next
             prev.next=node
             this.size++
                
             }
        }


    indexremove(index){

        if(index<0 || index>=this.size){
            return
        }
         let removeindex
        if(index===0){
            removeindex=this.head
            this.head= this.head.next
            this.size--
        }else{
            let prev= this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeindex=prev.next
            prev.next=removeindex.next
            this.size--
            return removeindex.value


        }

    }    

    sum(){
        if(this.isEmpty()){
            console.log('list is emty');
        }else{
            let prev=this.head
          for (let i = 0; i <this.size-2; i++) {
            prev=prev.next
            
          }
          if(prev.next){
          let sum = prev.value+prev.next.value
          return sum
          }
            
            
        }
    }



    prind(){
        if(this.isEmpty()){
            console.log('list is emty')

        }else{
             let curr = this.head
             let listvalues=''
             while (curr) {
                listvalues+= `${curr.value}`+" "    
                curr=curr.next
                
             }  
             console.log(listvalues);

            
            }
    }

    revers(){
        if(this.isEmpty()){
            console.log('no one');
        }else{
            let curr=this.head
            let prev=null
            let next=null
            while (curr!==null) {

                next= curr.next
                curr.next= prev
                prev=curr
                curr=next
            }

            this.head=prev
        }
    }
}

const list = new LinkedList()
// console.log('list is emty?',list.isEmpty())
// console.log('list size',list.getsize());



list.prepend(10)
list.prepend(20)
list.prepend(67)
list.prepend(30)
list.prepend(39)
list.revers()
list.prind()

