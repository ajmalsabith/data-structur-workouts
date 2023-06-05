// class queu{
//     constructor(){
//          this.item=[]
//     }

//     requeu(element){

//         this.item.push(element)

//     }
//     dqueu(){
//         this.item.shift()
//     }
//     peak(){
//        console.log(this.item[0]); 
//     }

//     print(){
//         console.log(this.item);
//     }
//     isEmty(){
//        return this.item.length===0
//     }
//     size(){
//         return this.item.length
//     }
// }


// const list =new queu()

// list.requeu(45)
// list.requeu(34)
// list.requeu(89)

// list.peak()
// list.print()


class queuelinked{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedqueue{

    constructor(){
        this.friend= null
        this.rear= null
        this.size=0
    }

    isEmty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }

    requeue(value){
        const node= new queuelinked(value)
        if (this.isEmty()) {

            this.friend= this.rear= node
            
        }else{
            this.rear.next= node
            this.rear= node
        }
        this.size++
    }

    print(){
        let listvalue=''
        if (this.isEmty()) {
            console.log('list is emty');
            
        }else{
            let curr= this.friend
            while (curr) {
                listvalue+=curr.value+' '
                curr=curr.next
            }
            console.log(listvalue);
        }
    }

    dequeue(){
        if (this.isEmty()) {
            console.log('list is emty');
            
        }else{
            this.friend= this.friend.next
            this.size--
            if (this.friend==null) {

                this.rear=null
                
            }
        }
    }

}


const list = new linkedqueue()

list.requeue(45)
list.requeue(33)
list.requeue(78)
list.requeue(21)

list.requeue(99)

list.dequeue()

list.print()