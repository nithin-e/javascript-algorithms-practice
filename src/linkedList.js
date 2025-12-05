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

//   append(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//   }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    slow.prev.next = slow.next;
  }

  deleteNode(value) {
    if (this.head.data == value) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current) {
      if (current.data == value) {
        break;
      }
      current = current.next;
    }

    current.prev.next = current.next;
  }

  removeDuplicate() {
    let current = this.head;
    let seen = new Set();

    while (current) {
      if (seen.has(current.data)) {
        if (current.prev) {
          current.prev.next = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        }

        if (this.head == current) {
          this.head = current.next;
        }

        current = current.next;
      } else {
        seen.add(current.data);
        current = current.next;
      }
    }
  }

  max() {
    let current = this.head;
    let max = 100;
    while (current) {
      if (current.data < max) {
        max = current.data;
      }
      current = current.next;
    }

    console.log("...", max);
  }

  secondLargest(){

    let current=this.head
    let Largest=-Infinity
    let secondLargest=-Infinity

    while(current){
      if (current.data>Largest) {
        secondLargest=Largest
        Largest=current.data
      }else if(current.data>secondLargest&&secondLargest!=Largest){
         secondLargest=current.data
      }

         current=current.next
    }

 console.log('secondLargest', secondLargest);
 

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
list.append(10);
list.append(20);
list.append(30);
list.append(300);
list.append(30);
list.append(40);
list.append(50);
list.append(50);

// list.findMiddle();
// list.deleteNode(50);
// list.removeDuplicate();
list.max()
// list.secondLargest()
// list.display();


// 17. Check if a linked list is a palindrome
// 18. Merge two sorted linked lists
// 21. Sort a linked list (using Merge Sort)
// 22. Rotate a linked list by K nodes
// i need this Questions answers