class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }


  findMiddle(){

    let slow=this.head
    let fast=this.head
    while (fast!=null&&fast.next!=null) {
        slow=slow.next
        fast=fast.next.next
    }
   
    slow.prev.next=slow.next
    
  }


  display() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}


const list=new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

list.findMiddle()
list.display()