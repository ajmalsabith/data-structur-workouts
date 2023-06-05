class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
  
}


class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmty(){
        return this.size===0
    }
    getsize(){
         return this.size
    }

    prepend(value){

        const node = new Node(value)
        if (this.isEmty()) {
            this.head= node
        
        }else{

            node.next=this.head
            this.head=node
            

        }
        this.size++
    }

    print(){
        if (this.isEmty()) {

            console.log('list is emty');
            
        }else{
            let curr=this.head
           let listvalue=''
            while (curr) {

                listvalue+=`${curr.value}`+' '
                curr=curr.next

            }
            console.log(listvalue);
            
        }
    }

    appand(value){
        const node = new Node(value)
        if (this.isEmty()) {
            this.head=node
            
        }else{
            let curr=this.head
            while (curr.next) {

                curr=curr.next
                
            }
            curr.next= node
        
        }
        this.size++
    }

    insert(value,index){
        if (index<0 || index>this.size-1) {
            return -1
            
        }
        const node = new Node(value)
        if (index===0) {
            this.prepend(value)
        }else{
            let curr = this.head
            for (let i = 0; i < index-1; i++) {
                curr=curr.next
            }
            node.next= curr.next
            curr.next= node

        }
        this.size++
    }
    deleteindex(index){
        if(index<0 || index>this.size-1){
            return -1
        }
        if (index===0) {

            let remove= this.head
            this.head=this.head.next
            this.size--
        }else{
            let curr= this.head
            for (let i = 0; i < index-1; i++) {
                  curr= curr.next
                
            }
            let remove= curr.next
            curr.next= remove.next
            this.size--
        }
    }
    valueremove(value){

        if (this.isEmty()) {
            return
        }
        if(this.head.value===value){
            let remove= this.head
            this.head= this.head.next
            this.size--
        }else{
            let curr= this.head
            while (curr.next && curr.next.value!==value) {

                curr=curr.next
                
            }
           
            if (curr.next) {
                let remove = curr.next 
                curr.next= remove.next
                this.size--
            }

        }

    }
}



const list = new LinkedList()

list.prepend(56)
list.prepend(50)
list.prepend(10)
list.prepend(90)
list.prepend(77)

list.valueremove(77)


list.print()
