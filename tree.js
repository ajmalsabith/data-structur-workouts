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

class tree{
    constructor(value){
        this.value= value
        this.left= null
        this.right= null
    }
}

class treebst{
    constructor(){
        this.root= null
    }

    isemty(){
        return this.root===null
    }

    insert(value){

       const newnode= new tree(value)
        if (this.isemty()) {
            this.root= newnode
        }else{
          return this.insertval(this.root,newnode)
        }
    }

    insertval(root,newnode){
        if (root.value>newnode.value) {

            if (root.left==null) {

                root.left= newnode
                
            }else{
                 this.insertval(root.left,newnode)
            }
            
        }else{
            if (root.right==null) {

                root.right= newnode
                
            }else{
                 this.insertval(root.right,newnode)
            }
        }
    }

    search(root,value){
        if (!root) {

            return false
            
        }else{
            if(root.value==value){
                return root.value 
            }else if(root.value>value){

                return this.search(root.left ,value)
              
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preeorder(root){
        if (root) {
            console.log(root.value);
            this.preeorder(root.left)
            this.preeorder(root.right)
        }
    }


    inorder(root){
        if (root) {

            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
            
        }
    }

    postorder(root){
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
            
        }
    }
}


const list= new treebst()

list.insert(34)
list.insert(74)
list.insert(66)
list.insert(12)
list.insert(89)

list.postorder(list.root)



