
class tree{

    constructor(value){
        this.value= value
        this.left= null
        this.right= null
    }
}

class bytree{
    constructor(){
        this.root=null
    }

    isemty(){
        return this.root===null
    }

    insert(value){ 
        const node= new tree(value)
        if (this.isemty()) {
       this.root= node
            
        }else{
            return this.insertval(this.root,node)
        }
      
    } 
    insertval(root,node){
        if (root.value>node.value) {

            if (root.left==null) {

                root.left=node
                
            }else{
                this.insertval(root.left,node)
            }
            
        }else{
            if (root.right==null) {

                root.right= node
                
            }else{
                this.insertval(root.right,node)
            }
        }
    }

    

    preeorder(root){
        if (!root) {

            return null
            
        }else{
            console.log(root.value);
            this.preeorder(root.left)
            this.preeorder(root.right)
        }
    }
}


const list= new bytree()

list.insert(35)
list.insert(12)
list.insert(55)
list.insert(65)
list.insert(14)
console.log(list.isemty());

list.preeorder(list.root)