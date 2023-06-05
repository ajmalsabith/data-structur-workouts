class tree {
    constructor(value){
        this.value= value
        this.left= null
        this.right= null
    }
}


class bst{
    constructor(){
        this.root= null
    }

    isEmty(){
        return this.root===null
    }

    insert(value){
      const  newnode= new tree(value)
        if (this.isEmty()) {
            this.root= newnode
            
        }else{
           this.insertnode(this.root, newnode)
        }
    }

    insertnode(root, newnode){
        
        if (newnode.value <root.value) {
            if (root.left==null) {
                root.left= newnode
                
            }else{
                this.insertnode(root.left,newnode)
            }
            
        }else{
            if (root.right==null) {
                root.right= newnode
                
            }else{
                this.insertnode(root.right,newnode)
            }
        }
    }


    search(root, value){
        if (!root) {

            return false
            
        }else{
            if (root.value===value) {
                return root.value  
            }else if(root.value>value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }
}

const treee= new bst()


treee.insert(45)
treee.insert(5)
treee.insert(85)
treee.insert(13)

console.log(treee.search(treee.root,85))
console.log(treee.search(treee.root,13))
console.log(treee.search(treee.root,98))