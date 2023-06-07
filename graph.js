
class graph{
    constructor(){
        this.addjesencylist= []
    }

    addvertix(vertix){

        if (!this.addjesencylist[vertix]) {

            this.addjesencylist[vertix]= new Set()
            
        }
        

    }

    addedge(vertix1,vertix2){
        if (!this.addjesencylist[vertix1]) {

            this.addjesencylist(vertix1)
            
        }
        if (!this.addjesencylist[vertix2]) {

            this.addjesencylist(vertix2)
            
        }

        this.addjesencylist[vertix1].add(vertix2)
        this.addjesencylist[vertix2].add(vertix1)
      


    }

    deletevertix(vertix){
        for (let deletever of this.addjesencylist[vertix]) {

             this.deleteedge(vertix,deletever)


            
        }
        let v=delete this.addjesencylist[vertix]
        console.log(v);
    }

    deleteedge(vertix1,vertix2){
        this.addjesencylist[vertix1].delete(vertix2)
        this.addjesencylist[vertix2].delete(vertix1)
    }

    display(){
        console.log(this.addjesencylist);
    }
 
}

const list= new graph()
list.addvertix('A')
list.addvertix('B')
list.addvertix('C')

list.addedge('A','B')
list.addedge('B','C')

list.display()

list.deletevertix('C')

list.display()



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

