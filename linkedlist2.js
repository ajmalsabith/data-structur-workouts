class Node{

    constructor(value){
        this.value=value
        this.next=null
    }   

}

class LingedList{

    constructor(){
        this.head=null
        this.size=0
    }

    isEmty(){
        return this.size ===0
    }
    getsize(){
        return this.size
    }

    prepend(value){
        const node =  new Node(value)
        if(this.isEmty()){
           this.head=node
        }else{
            node.next= this.head
            this.head=node
        }
        this.size++
        
    }
     
    append(value){

        const node= new Node(value)
        if(this.isEmty()){
            this.head =node
        }else{
            let prev=this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next= node
            this.size++
        }

    }

    insertvalue(value,index){
        const node = new Node(value)
        if(index<0|| index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let prev= this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next= prev.next
            prev.next=node
            this.size++

        }
    }
    indexremove(index){
        if(index<0||index>=this.size){
            return
        }
        let removeindex
        if(index===0){
           removeindex= this.head
           this.head= this.head.next
           this.size--
        }else{
            let prev= this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeindex=prev.next
            prev.next= removeindex.next
            this.size--

        }
    }

    removevalue(value){
        if(this.isEmty()){
            return null
        }
        
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
           let prev = this.head
           while(prev.next && prev.next.value !==value){
                 prev=prev.next
           }
           if(prev.next){
            let removevalue= prev.next
            prev.next= removevalue.next
            this.size--
           }
           return null
        }
    }

    

    print(){

        if(this.isEmty()){
            console.log('list is emty');
        }else{
            let curr=this.head
            let listvalues=''
            while (curr) {
                listvalues+= `${curr.value}`+" "
                curr= curr.next

            }
            console.log(listvalues);

        }
       
    }
}



const list = new LingedList()

list.prepend(5)
list.prepend(7)
list.prepend(78)

 list.removevalue(78)
list.print()