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

  add(data) {
    const Newnode = new Node(data);

    if (!this.head) {
      this.head = Newnode;
      this.tail = Newnode;
    } else {
      this.tail.next = Newnode;
      this.tail = Newnode;
    }
  }

  palindrom(){

   
    let slow=this.head
    let fast=this.head

    while(fast!=null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    
   let prev=null;
   let current=slow;
   let temp=null
   
   while (current) {
    temp=current.next
    current.next=prev
    prev=current
    current=temp
   }

   let left=this.head;
   let right =prev  

   while (right) {
    if (left.data!==right.data) {
      return false
    }
    left=left.next;
    right=right.next
   }

   return true

  }

  displayy() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.add("m");
list.add("a");
list.add("d");
list.add("a");
list.add("m");



console.log(list.palindrom());


// list.displayy();
