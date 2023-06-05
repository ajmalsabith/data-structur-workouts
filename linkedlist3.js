class Node {

    constructor(value) {
        this.value = value
        this.next = null

    }

}

class LingedList {
    constructor(value) {
        this.head = null
        this.size = 0
    }

    isEmty() {
        return this.size === 0
    }
    getsize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)

        if (this.isEmty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    print() {
        if (this.isEmty()) {
            console.log('list is emty');
        } else {
            let prev = this.head
            let listvalue = ''
            while (prev) {
                listvalue += `${prev.value}` + ' '
                prev = prev.next
            }
            console.log(listvalue);
        }
    }

    appand(value) {
        const node = new Node(value)
        if (this.isEmty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
            this.size++
        }
    }

    insert(value, index) {
        const node = new Node(value)
        if (index < 0 || index >= this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    indexremove(index) {
        if (index < 0 || index >= this.size) {
            return
        }
        let removeindex
        if (index === 0) {
            removeindex = this.head
            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeindex = prev.next
            prev.next = removeindex.next
            this.size--



        }
    }

    valueremove(value) {
        if (this.isEmty()) {
            return null
        }
        let remove
        if (value === this.head.value) {

            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                remove = prev.next
                prev.next = remove.next
                this.size--

            }
        }

    }

    replase(revalue, addvalue) {
        const node = new Node(addvalue)
        if (this.isEmty()) {
            return null
        }

        if (this.head.value == revalue) {
            node.next = this.head.next
            this.head = node


        } else {
            let prev = this.head
            while (prev.value == revalue) {




                prev = prev.next
            }
            if (prev.value == revalue) {
                node.next = prev.next
                prev = node
            }

        }

    }
    replace(valueToReplace, newValue) {
        const newNode = new Node(newValue);

        if (this.isEmty()) {
            return;
        }

        if (valueToReplace === this.head.value) {
            newNode.next = this.head.next;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                if (currentNode.next.value === valueToReplace) {
                    newNode.next = currentNode.next.next;
                    currentNode.next = newNode;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
    }

    changeval(value) {
        let curr = this.head
        while (curr.next) {
            if (curr.next.value == value) {
                let temp = curr.next.value
                curr.next.value = curr.next.next.value

                curr.next.next.value = temp


                return
            }
            curr = curr.next
        }



    }


    evennumber() {
        let curr = this.head
        let listval=0
        while (curr) {

            if (curr.value % 2 == 0) {

                listval = listval + curr.value 
               

            }
            curr = curr.next
        }
        console.log(listval);
        
    }

    unique() {
        let uniques = []

        if (this.isEmty()) {
            console.log('list is emty');
        } else {
            let curr = this.head
            while (curr) {
                let flag =0
                let temp = this.head
                while (temp) {
                    if (curr != temp && temp.value == curr.value) {
                        flag++
                        break;
                    }
                    temp = temp.next
                }

                if (flag==0) {
                    uniques.push(curr.value)
                }
                curr = curr.next
            }
        }
        return uniques

    }
    
    revers() {
        if (this.isEmty()) {
          return;
        } else {
          let curr = this.head;
          let prev = null;
      
          while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
          }
      
          this.head = prev;
        }
      }


      
      

}



const list = new LingedList()

list.prepend(20)
list.prepend(9)
list.prepend(7)
list.prepend(9)
list.prepend(84)
list.print()
list.revers()
list.print()







