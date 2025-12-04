class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const Newnode = new Node(data);

    if (!this.head) {
      this.head = Newnode;
      this.tail = Newnode;
    } else {
      this.tail.next = Newnode;
      this.tail = Newnode;
    }
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;
    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = slow.next.next;
    }

    prev.next = slow.next;
  }

  deleteValue(value) {
    if (this.head.data == value) {
      this.head = this.head.next;
      return;
    } else {
      let current = this.head;
      let prev = null;

      while (current) {
        if (current.data == value) {
          break;
        }
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
  }

  removeDuplicate(){
    let set=new Set()
    let current=this.head;
    let prev=null
     while (current) {
       
        if (set.has(current.data)) {
              prev.next=current.next
        }else{
            set.add(current.data)
        }
        prev=current
        current=current.next
     }
  }

 reverce(){
     
    let current=this.head;
    let prev=null;
    let temp=null

    while(current){
     temp=current.next
     current.next=prev
     prev=current
     current=temp
    }

    this.head=prev
    this.tail=this.head
 }

 findMax(){

    let current=this.head;
    let max=this.head.data

    while(current){
       if (current.data>max) {
         max=current.data
       }

       current=current.next
    }

    return max
 }

 secontLargest(){
    let Largest=-Infinity
    let secondLargest=-Infinity
    let current=this.head

    while (current) {
        if(current.data>Largest){
           secondLargest=Largest;
           Largest=current.data
        }else if(current.data<Largest&&current.data!=Largest){
         secondLargest=current.data
        }
        current=current.next
    }

    return secondLargest
 }

 


  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(300);
list.append(40);
list.append(50);

// list.findMiddle()
// list.deleteValue(50);
// list.removeDuplicate()
// list.display();
// list.reverce()
// console.log(list.findMax())
console.log(list.secontLargest())


// list.display()
