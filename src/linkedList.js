// class Node {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

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

//   findMiddle() {
//     let slow = this.head;
//     let fast = this.head;

//     while (fast != null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     slow.prev.next = slow.next;
//   }

//   deleteNode(value) {
//     if (this.head.data == value) {
//       this.head = this.head.next;
//     }
//     let current = this.head;
//     while (current) {
//       if (current.data == value) {
//         break;
//       }
//       current = current.next;
//     }

//     current.prev.next = current.next;
//   }

//   removeDuplicate() {
//     let current = this.head;
//     let seen = new Set();

//     while (current) {
//       if (seen.has(current.data)) {
//         if (current.prev) {
//           current.prev.next = current.next;
//         }

//         if (current.next) {
//           current.next.prev = current.prev;
//         }

//         if (this.head == current) {
//           this.head = current.next;
//         }

//         current = current.next;
//       } else {
//         seen.add(current.data);
//         current = current.next;
//       }
//     }
//   }

//   max() {
//     let current = this.head;
//     let max = 100;
//     while (current) {
//       if (current.data < max) {
//         max = current.data;
//       }
//       current = current.next;
//     }

//     console.log("...", max);
//   }

//   secondLargest(){

//     let current=this.head
//     let Largest=-Infinity
//     let secondLargest=-Infinity

//     while(current){
//       if (current.data>Largest) {
//         secondLargest=Largest
//         Largest=current.data
//       }else if(current.data>secondLargest&&secondLargest!=Largest){
//          secondLargest=current.data
//       }

//          current=current.next
//     }

//  console.log('secondLargest', secondLargest);

//   }

//   display() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(300);
// list.append(30);
// list.append(40);
// list.append(50);
// list.append(50);

// list.findMiddle();
// list.deleteNode(50);
// list.removeDuplicate();
// list.max()
// list.secondLargest()
// list.display();

// 17. Check if a linked list is a palindrome
// 18. Merge two sorted linked lists
// 21. Sort a linked list (using Merge Sort)
// 22. Rotate a linked list by K nodes
// i need this Questions answers

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

  insert(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  kthNumDelete(target) {
    let current = this.head;
    let count = 0;
    let arr = [];
    while (current) {
      count++;
      arr.push(current.data);
      current = current.next;
    }

    let newArr = arr.reverse();
    let newTarget = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (i == target - 1) {
        newTarget = newArr[i];
      }
    }

    let current1 = this.head;
    let prev = null;

    if (newTarget === this.head.data) {
      this.head = current1.next;
      return;
    }
    while (current1) {
      if (newTarget == current1.data) {
        break;
      }
      prev = current1;
      current1 = current1.next;
    }

    prev.next = current1.next;
  }

  removeDuplicate() {
    let current = this.head;
    let seen = new Set();
    let prev = null;

    while (current) {
      if (seen.has(current.data)) {
        prev.next = current.next;
      } else {
        seen.add(current.data);
        prev = current;
      }

      current = current.next;
    }
  }

  arrayTolinkedList(arr) {
    for (let i = 0; i < arr.length; i++) {
      const newNode = new Node(arr[i]);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  sort() {
    console.log(this.head);

    this.head = this.mergeSort(this.head);
  }

  mergeSort(head) {
    if (!head || !head.next) return head;

    let getMiddle = this.middle(head);
    let rightHead = getMiddle.next;
    getMiddle.next = null;

    let left = this.mergeSort(head);
    let right = this.mergeSort(rightHead);

    return this.merge(left, right);
  }

  merge(left, right) {
    let dummy = new Node(-1);
    let current = dummy;

    while (left && right) {
      if (left.data < right.data) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }

      current = current.next;
    }

    current.next = left || right;

    return dummy.next;
  }

  middle(head) {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  mergeTwoLinkedList(list2) {
    this.tail.next = list2.head;
    this.tail = list2.tail;

    this.sort();
  }

  sortMiddleThree() {
    let start = this.head.next.next;
    let current = start;
    let arr = [];

    for (let i = 0; i < 3; i++) {
      arr.push(current.data);
      current = current.next;
    }

    arr.sort((a, b) => a - b);
    current = start;

    for (let i = 0; i < 3; i++) {
      current.data = arr[i];
      current = current.next;
    }
  }


  swapHeadToTail(){
    let current=this.head.data
    this.head.data=this.tail.data
    this.tail.data=current
  }


  removeDup(){

    let current=this.head
    let prev=null
    let seen=new Set()

    while (current) {

      if (seen.has(current.data)) {
        prev.next=current.next
      }else{
        prev=current
        seen.add(current.data)
      }

      current=current.next
    }


  }

  removeDupWithOutSet(){

    let current=this.head

    while (current) {

      let runner=current
      while (runner.next) {
        if (runner.next.data==current.data) {
          runner.next=runner.next.next
        }else{
          runner=runner.next
        }
      }

      current=current.next
      
    }


  }

  disply() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
// list.insert(10);
// list.insert(20);
// list.insert(30);
// list.insert(30);
// list.insert(40);
// list.insert(40);
// list.insert(50);

// list.kthNumDelete(4);

// list.removeDuplicate()

let arr = [12, 23, 21, 34, 3, 1, 5,1,5];

list.arrayTolinkedList(arr);
// list.sort()

// let arr1 = [10, 20, 30, 40];

// const list2 = new LinkedList();
// list2.arrayTolinkedList(arr1);

// list.mergeTwoLinkedList(list2)

// list.sortMiddleThree();
// list.swapHeadToTail()
// list.removeDup()
list.removeDupWithOutSet()
list.disply();
