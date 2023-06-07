// class tree{
//     constructor(value){
//         this.value=value
//         this.left= null
//         this.right= null
//     }
// }

// class treesample{
//     constructor(){
//         this.root= null
//     }

//     isemty(){
//         return this.root===null
//     }

//     insert(value){
//         const newnode= new tree(value)
//         if (this.isemty()) {

//             this.root=newnode
            
//         }else{
//             return this.insertval(this.root,newnode)

//         }
//     }

//     insertval(root,newnode){
//         if (root.value>newnode.value){

//             if (root.left==null) {

//                 root.left= newnode
                
//             }else{
//                 this.insertval(root.left,newnode)
//             }

            
            
//         }else{

//             if (root.right==null) {

//                 root.right=newnode
//             }else{
//                 this.insertval(root.right,newnode)
//             }

//         }
//     }

//     postorder(root){
//         if (!root) {
//             return null
//         }else{
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
//         }
//     }

//     preeorder(root){
//         if (!root) {
//             return -1
//         }else{
//             console.log(root.value);
//             this.preeorder(root.left)
//             this.preeorder(root.right)
//         }
//     }

//     inorder(root){
//         if (!root) {
//             return -1
            
//         }else{
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }

//     min(root){
//         if (root.left==null) {
//             console.log(root.value)
            
//         }else {
//             this.min(root.left)
//         }
//     }

//     max(root){
//         if (root.right==null) {

//             console.log(root.value);
            
//         }else{
//             this.max(root.right)
//         }
//     }

//     search(root,value){

//         return this.searchhelp(root,value)

//     }

//     searchhelp(root,value){

//         if (!root) {
//            return false
//         }else{
//             if (root.value===value) {
//                 return true
//             }
//             else if(root.value>value){
//                return this.searchhelp(root.left,value)
//             }else{
//                return this.searchhelp(root.right,value)
//             }
//         }
       
//     }

//     delete(value){
//         this.root= this.deletehelp(this.root,value)
//     }
//     deletehelp(root,value){
//         if (root==null) {

//             return root
            
//         }

//         if (root.value>value) {

//             root.left= this.deletehelp(root.left,value)
            
//         }else if(root.right<value){
//             root.right= this.deletehelp(root.right,value)
//         }else{
//             if (!root.left && !root.right) {

//                 return null 
                
//             } 
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value= this.min(root.right)
//             root.right= this.deletehelp(root.right,root.value)
//         }
//         return root
        
//     }

    




// }


// const list= new treesample()


// list.insert(45)
// list.insert(78)
// list.insert(23)
// list.insert(11)
// list.insert(99)


// list.delete(78)

// list.inorder(list.root)




class tree{
    constructor(value){
        this.value= value
        this.left=null
        this.right=null
    }
}

class treenew{
    constructor(){
        this.root=null
    }

    isemty(){
        return this.root===null
    }

    insert(value){

        const newnode= new tree(value)
        if (this.isemty()) {

            this.root=newnode
            
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

        return this.searchval(root,value)

    }
    searchval(root,value){
        if (!root) {

            return false
            
        }

        if (root.value==value) {

            return true

                        
        }
        if (root.value>value) {

           return this.searchval(root.left,value)
            
        }else{
           return this.searchval(root.right,value)
        }
    }

    delete(value){
        this.root= this.deleteval(this.root,value)
    }

    deleteval(root,value){
        if (root==null) {
            return root
        }
        if (root.value>value) {

            root.left=this.deleteval(root.left,value)
            
        }else if(root.right<value){
            root.right= this.deleteval(root.right,value)
        }else{
            if (!root.left&& !root.right) {

                return null
                
            }
            if (!root.left) {
                return root.right
                
            }else if (!root.right) {

                return root.left
                
            }
            root.value= this.min(root.right)
            root.right= this.deleteval(root.right,root.value)
        }
        return root
    }

    min(root){
        if (root.left==null) {

            console.log(root.value);
            
        }else{
            this.min(root.left)

        }
    }
    max(root){
        if (root.right==null) {

            console.log(root.value);
            
        }else{
            this.max(root.right)

        }
    }

    preeorder(root){
        if (!root) {
            null
        }else{
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
}


const list= new treenew()

list.insert(23)
list.insert(56)
list.insert(87)
list.insert(12)
list.insert(9)


list.delete(87)


list.inorder(list.root)


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    