// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(data) {
//     this.items.push(data);
//   }

//   pop() {
//     if (this.items.length == 0) {
//       return "stack is empty";
//     } else {
//       return this.items.pop();
//     }
//   }

//   peek(){
//     return  this.items[this.items.length-1]
//   }

//   print(){
//     console.log(this.items.toString());

//   }
// }

// const stack=new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)

// // stack.pop()
// console.log(stack.peek())

// // stack.print()

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(data) {
//     let newNode = new Node(data);

//     newNode.next = this.top;
//     this.top = newNode;
//   }

//   pop(){

//     let removesItem=this.top.data;
//     this.top=this.top.next

//     return removesItem

//   }

//   print() {
//     let current = this.top;
//     let result = "";
//     while (current) {
//         result+=current.data + " "
//         current=current.next
//     }

//      console.log(result);
//   }
// }

// const stack=new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// console.log(stack.pop());
// stack.print()

// class StackUsinQue {
//   constructor() {
//     this.Q1 = [];
//     this.Q2 = [];
//   }

//   push(data) {
//     while (this.Q1.length > 0) {
//       this.Q2.push(this.Q1.shift());
//     }
//     this.Q1.push(data);

//     while (this.Q2.length > 0) {
//       this.Q1.push(this.Q2.shift());
//     }
//   }

//   print(){
//     console.log(this.Q1)

//   }
// }

// const stack=new StackUsinQue()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.print()

class Stack {
  constructor() {
    this.Stack1 = [];
    this.Stack2 = [];
  }

  push(data) {
    this.Stack1.push(data);
  }

  // sort(){

  //     while (this.Stack1.length>0) {
  //         let value=this.Stack1.pop()
  //         while (this.Stack2.length>0&&this.Stack2[this.Stack2.length-1]<value) {
  //             this.Stack1.push(this.Stack2.pop())
  //         }

  //         this.Stack2.push(value)
  //     }

  //     while(this.Stack2.length>0){
  //        this.Stack1.push(this.Stack2.pop())
  //     }

  // }

  sort() {
    while (this.Stack1.length > 0) {
      let value = this.Stack1.pop();

      while (
        this.Stack2.length > 0 &&
        this.Stack2[this.Stack2.length - 1] < value
      ) {
        this.Stack1.push(this.Stack2.pop());
      }

      this.Stack2.push(value);
    }
  }

  print() {
    console.log(this.Stack2);
  }
}

const stack = new Stack();
stack.push(40);
stack.push(60);
stack.push(90);
stack.push(10);
stack.push(400);

stack.sort();
stack.print();
