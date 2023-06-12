// class tree {
//     constructor(value){
//         this.value= value
//         this.left= null
//         this.right= null
//     }
// }


// class bst{
//     constructor(){
//         this.root= null
//     }

//     isEmty(){
//         return this.root===null
//     }

//     insert(value){
//       const  newnode= new tree(value)
//         if (this.isEmty()) {
//             this.root= newnode
            
//         }else{
//            this.insertnode(this.root, newnode)
//         }
//     }

//     insertnode(root, newnode){
        
//         if (newnode.value <root.value) {
//             if (root.left==null) {
//                 root.left= newnode
                
//             }else{
//                 this.insertnode(root.left,newnode)
//             }
            
//         }else{
//             if (root.right==null) {
//                 root.right= newnode
                
//             }else{
//                 this.insertnode(root.right,newnode)
//             }
//         }
//     }


//     search(root, value){
//         if (!root) {

//             return false
            
//         }else{
//             if (root.value===value) {
//                 return root.value  
//             }else if(root.value>value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right, value)
//             }
//         }
//     }
// }

// const treee= new bst()


// treee.insert(45)
// treee.insert(5)
// treee.insert(85)
// treee.insert(13)

// console.log(treee.search(treee.root,85))
// console.log(treee.search(treee.root,13))
// console.log(treee.search(treee.root,98))

// class tree{
//     constructor(value){
//         this.value= value
//         this.left= null
//         this.right= null
//     }
// }

// class treebst{
//     constructor(){
//         this.root= null
//     }

//     isemty(){
//         return this.root===null
//     }

//     insert(value){

//        const newnode= new tree(value)
//         if (this.isemty()) {
//             this.root= newnode
//         }else{
//           return this.insertval(this.root,newnode)
//         }
//     }

//     insertval(root,newnode){
//         if (root.value>newnode.value) {

//             if (root.left==null) {

//                 root.left= newnode
                
//             }else{
//                  this.insertval(root.left,newnode)
//             }
            
//         }else{
//             if (root.right==null) {

//                 root.right= newnode
                
//             }else{
//                  this.insertval(root.right,newnode)
//             }
//         }
//     }

//     search(root,value){
//         if (!root) {

//             return false
            
//         }else{
//             if(root.value==value){
//                 return root.value 
//             }else if(root.value>value){

//                 return this.search(root.left ,value)
              
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     preeorder(root){
//         if (root) {
//             console.log(root.value);
//             this.preeorder(root.left)
//             this.preeorder(root.right)
//         }
//     }


//     inorder(root){
//         if (root) {

//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
            
//         }
//     }

//     postorder(root){
//         if (root) {
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
            
//         }
//     }

//     bfslevelorder(){
//         const queue= []
//         queue.push(this.root)
//         while (queue.length) {

//             let curr= queue.shift()
//             console.log(curr);
            
        
//         if (curr.left) {

//             queue.push(curr.left)
            
//         }if(curr.right){
//             queue.push(curr.right)
//         }
//     }
        
//     }

//     min(root){
//         if (!root.left) {
          
//             return root.value
            
//         }else{
          
//             return this.min(root.left)
//         }
//     }


//     max(root){
//         if (!root.right) {
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root= this.deletevalue(this.root,value)
//     }

//     deletevalue(root,value){
//         if (root==null) {

//             return root
            
//         }
//         if (root.value>value) {
            
//             root.left= this.deletevalue(root.left,value)
//         }else if(root.value<value){
          

//             root.right= this.deletevalue(root.right,value)
//         }else{
           
//             if (!root.left && !root.right) {

//                 return null
                
//             }
//              if(!root.left){

//                  return root.right

//             }else if(!root.right){
//                 return root.left
//             }

//             root.value= this.min(root.right)
//             root.right= this.deletevalue(root.right,root.value)
            
//         }
//         return root
//     }


// }


// const list= new treebst()

// list.insert(34)
// list.insert(74)
// list.insert(66)
// list.insert(12)
// list.insert(10)
// list.insert(89)

// list.delete(66)

// list.inorder(list.root)



class tree{
    constructor(value){
        this.value=value 
        this.left= null
        this.right= null
    }
}

class treenew{
    constructor(){
        this.root=null
    }
    isemty(){
        return this.root==null
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

    preeorder(root){
        if (!root) {

          return null
            
        }else{
            console.log(root.value);
            this.preeorder(root.left)
            this.preeorder(root.right)
        }

    }
    
    search(root,value){
        if (!root) {

            return false
            
        }else{
            if (root.value===value) {

               return root.value
                
            }
             if (root.value>value) {

                return this.search(root.left,value)
                
            }else{
                return this.search(root.right,value)
            }
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

            root.left= this.deleteval(root.left,value)
            
        }else if( root.value<value){
            root.right= this.deleteval(root.right,value)
        }else{
            if (!root.left && !root.right) {

                return null
                
            }
            if (!root.left) {
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value= root.right.value
            root.right= this.deleteval(this.right,root.value)
        }
        return root
    }


   
}

const list= new treenew()

list.insert(34)
list.insert(53)
list.insert(88)
list.insert(11)
list.insert(10)


list.preeorder(list.root)