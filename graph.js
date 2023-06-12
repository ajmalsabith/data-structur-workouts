
// class graph{
//     constructor(){
//         this.addjesencylist= []
//     }

//     addvertix(vertix){

//         if (!this.addjesencylist[vertix]) {

//             this.addjesencylist[vertix]= new Set()
            
//         }
        

//     }

//     addedge(vertix1,vertix2){
//         if (!this.addjesencylist[vertix1]) {

//             this.addjesencylist(vertix1)
            
//         }
//         if (!this.addjesencylist[vertix2]) {

//             this.addjesencylist(vertix2)
            
//         }

//         this.addjesencylist[vertix1].add(vertix2)
//         this.addjesencylist[vertix2].add(vertix1)
      


//     }

//     deletevertix(vertix){
//         for (let deletever of this.addjesencylist[vertix]) {

//              this.deleteedge(vertix,deletever)


            
//         }
//         let v=delete this.addjesencylist[vertix]
//         console.log(v);
//     }

//     deleteedge(vertix1,vertix2){
//         this.addjesencylist[vertix1].delete(vertix2)
//         this.addjesencylist[vertix2].delete(vertix1)
//     }

//     display(){
//         console.log(this.addjesencylist);
//     }
 
// }

// const list= new graph()
// list.addvertix('A')
// list.addvertix('B')
// list.addvertix('C')

// list.addedge('A','B')
// list.addedge('B','C')

// list.display()

// list.deletevertix('C')

// list.display()



// class graph{
//     constructor(){
//         this.addjesencylist= []
//     }

//     addvertix(vertix){

//         if (!this.addjesencylist[vertix]) {

//             this.addjesencylist[vertix]= []
            
//         }
        

//     }

//     addedge(vertix1,vertix2){
//         if (!this.addjesencylist[vertix1]) {

//             this.addjesencylist(vertix1)
            
//         }
//         if (!this.addjesencylist[vertix2]) {

//             this.addjesencylist(vertix2)
            
//         }

//         this.addjesencylist[vertix1].push(vertix2)
//         this.addjesencylist[vertix2].push(vertix1)
      


//     }

//     display(){
//         console.log(this.addjesencylist);
     
       
//     }
 
// }

// const list= new graph()
// list.addvertix('A')
// list.addvertix('B')
// list.addvertix('C')

// list.addedge('A','B')
// list.addedge('B','C')

// list.display()



// class graph{
//     constructor(){
//         this.addjesencylist= []
//     }

//     addwertix(value){
//         if (!this.addjesencylist[value]) {

//             this.addjesencylist[value]= new Set()
            
//         }
//     }
//     addedge(value1,value2){
//         if (!this.addjesencylist[value1]) {

//             this.addwertix(value1)
            
//         }
//         if (!this.addjesencylist[value2]) {

//             this.addwertix(value2)
            
//         }
//         this.addjesencylist[value1].add(value2)
//         this.addjesencylist[value2].add(value1)

//     }

//     deletevertex(value){

//         for (let delet of this.addjesencylist[value]) {
//             this.deleteedge(value,delet)
//         }

//        let v= delete this.addjesencylist[value]
//        console.log(v);

//     }

//     deleteedge(value1,value2){
//         this.addjesencylist[value1].delete(value2)
//         this.addjesencylist[value2].delete(value1)
//     }

//     display(){
//         console.log(this.addjesencylist);
//     }




// }

// const list= new graph()
// list.addwertix('A')
// list.addwertix('B')
// list.addwertix('C')

// list.addedge('A','B')
// list.addedge('B','C')

// list.deletevertex('B')

// list.display()


// class graph{
//     constructor(){
//         this.addjsencylist=[]
//     }

//     addvertix(vertix){
//         this.addjsencylist[vertix]= new Set()
//     }

//     addedge(vertix1,vertix2){
//         if (!this.addjsencylist[vertix1]) {

//             this.addvertix(vertix1)
            
//         }
//         if (!this.addjsencylist[vertix2]) {

//             this.addvertix(vertix2)
            
//         }

//         this.addjsencylist[vertix1].add(vertix2)
//         this.addjsencylist[vertix2].add(vertix1)
//     }

//     display(){
//         console.log(this.addjsencylist);
//     }

//     delete(vertix){
//         if (!this.addjsencylist[vertix]) {

//             return
            
//         }else{
//           for (const delet of this.addjsencylist[vertix]) {

//             this.deletedge(vertix,delet)
            
//           }
//           let v= delete this.addjsencylist[vertix]
//           console.log(v);
//         }

//     }

//     deletedge(vertix,delte){
//         this.addjsencylist[vertix].delete(delte)
//         this.addjsencylist[delte].delete(vertix)
//     }


// }

// const list = new graph()

// list.addvertix('A')
// list.addvertix('B')
// list.addvertix('C')
// list.addvertix('D')

// list.addedge('A','C')
// list.addedge('B','D')
// list.addedge('A','D')
// list.delete('A')
// list.display()


// dfs(startVertex) {
//     let stack = []
//     let visited = {}

//     visited[startVertex] = true
//     stack.push(startVertex)

//     while (stack.length) {
//         let curr = stack.pop()
//         console.log(curr);
//         for (let neighbor of this.adjacencyList[curr]) {
//             if (visited[neighbor] == null) {
//                 visited[neighbor] = true
//                 stack.push(neighbor)
//             }
//         }
//     }
// }
//     bfs(startVertex) { 
//     const visited = {};
//     const queue = [];

//     visited[startVertex] = true;
//     queue.push(startVertex);

//     while (queue.length) {
//         const curr = queue.shift();
//         console.log(curr);

//         for (const neighbor of this.adjacencyList[curr]) {
//             if (visited[neighbor]==null) {
//                 visited[neighbor] = true;
//                 queue.push(neighbor);
//             }
//         }
// }}


class graph{
    constructor(){
        this.addjesencylist=[]
    }

    addvertex(value){
        this.addjesencylist[value]= new Set()
    } 

    addedge(value1,value2){
        if (!value1) {
            this.addvertex(value1)
        }
        if (!value2) {
            this.addvertex(value2)
        }

        this.addjesencylist[value1].add(value2)
        this.addjesencylist[value2].add(value1)
    }

    deleteval(value){
        for (const delet of this.addjesencylist[value]) {
            this.deleteedge(delet,value)
        }
        delete this.addjesencylist[value]
    }

    deleteedge(value1,value2){
        this.addjesencylist[value1].delete(value2)
        this.addjesencylist[value2].delete(value1)
    }

    display(){
        console.log(this.addjesencylist);
    }
    dfs(startVertex){
        let visited = new Set()
        const explore = vertex => {
            visited.add(vertex)
            console.log(vertex);
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    explore(neighbour)
                }
            }
        }

        explore(startVertex)
    }

   
    bfs(startindex){
        let queu=[]
        let viseted= new Set()
         

        viseted.add(startindex)
        queu.push(startindex)
        while (queu.length) {

            let vertex= queu.shift()
            console.log(vertex);
            for (const find of this.addjesencylist[vertex]) {

                if (!viseted.has(find)) {
                     viseted.add(find)
                     queu.push(find)
                }
                
            }
            
        }
    }

    
}

const list = new graph()
list.addvertex('A')
list.addvertex('B')
list.addvertex('C')

list.addedge('A','C')
list.addedge('B','C')

list.bfs('B')

