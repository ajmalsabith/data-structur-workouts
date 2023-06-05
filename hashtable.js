// class hashtable{
//   constructor(size){
//     this.size=size
//     this.table= Array(size)
//   }

//   hashfun(key){

//     let total= 0

//     for (let i = 0; i < key.length; i++) {
         
//       total+= key.charCodeAt(i)
//     }
//     console.log(total % this.size);

//     return total % this.size
    
//   } 

//   set(key, value){
//     let index= this.hashfun(key)
//      this.table[index]=value
//   }
//   get(key){
//     let index = this.hashfun(key)
//     const val=  this.table[index]
//     return val
//   }

//   remove(key){
//     let index = this.hashfun(key)
//     this.table[index]= undefined
//   }


//   print(){
//     for (let i = 0; i < this.table.length; i++) {
//            if (this.table[i]) {

//             console.log(i+' '+this.table[i]);
//            }
      
//     }
//   }

// }


// const list= new hashtable(30)

// list.set('key1','ajmal')
// list.set('key9','salaman')
// list.set('key3','hadim')
// list.set('name','kannan')



// list.print()
///////

class hashtable{
  constructor(size){
    this.size=size
    this.table= Array(size)
  }


  hashfung(key){
    let total=0
    for (let i = 0; i < key.length; i++) {
   
      total+= key.charCodeAt(i)
    }
   
    return total % this.size
   

  }

    hashfun(key){

    let total= 0

    for (let i = 0; i < key.length; i++) {
         
      total+= key.charCodeAt(i)
    }
    console.log(total % this.size);

    return total % this.size
    
  } 

  set(key, value){
    let index= this.hashfung(key)
     this.table[index]=value
  }

  get(key){
    let index= this.hashfung(key)
    let val= this.table[index]
    return val
  }
  remove(key){
    let index = this.hashfung(key)

    this.table[index]=undefined
  }

  print(){
   
    for (let i = 0; i < this.table.length; i++) {
      if(this.table[i]){
      
        console.log(i+' '+ this.table[i]);
      }
      
    }
  }
}


const list= new hashtable(30)


list.set('key1','ajmal')
list.set('key9','salaman')
list.set('key3','hadim')
list.set('name','kannan')



list.print()