// let person={
//     name:'nithin',
//     age:30,
//     place:'ottapalam'
// }

// person.gender='male'

// delete person.age

// console.log(person);

// const obj = { a: 1 };
// const obj2 = obj;
// obj2.a = 5;
// console.log(obj.a);

// closure

// function outer() {
//   let count = 10;

//   function inner() {
//     console.log(count);
//   }

//   return inner
// }

// const res=outer()
// console.log(res());

// function A() {
//      console.log('welcome');
// }

// function B(value,callback) {
//    console.log('hi',value)

//     callback()
// }

// B('nithin',A)

//callback hell//

// function A(callback) {
//   console.log("iam function A");
//   callback()
// }

// function B(callback) {
//   console.log("iam function B");
//    callback()
// }

// function C() {
//   console.log("iam function C");

// }

// A(function(){
//     B(function(){
//         C(function(){
//             console.log('all functionsexicuted ')

//         })
//     })
// })

//  function Vote(age) {

//     return new Promise ((resolve,reject)=>{
//         if (age>18) {
//             resolve('successs')
//         }else{
//             reject('rejected')
//         }
//     })
//  }

//  Vote(20)
//  .then((msng)=>{
//    console.log(msng);

//  })
//  .catch((err)=>{
//    console.log(err);

//  })

// function A() {
//     return new Promise((resolve,reject)=>{
//         console.log('function A')
//          resolve()
//     })
// }

// function B() {
//     return new Promise((resolve,reject)=>{
//        console.log('Function B');
//        resolve()

//     })
// }

// function C() {
//     return new Promise(()=>{
//         console.log('Function C');

//     })
// }

// A()
// .then(()=>B())
// .then(()=>C())
// .catch((err)=>{
//     console.log(err);

// })

// function A() {
//     return new Promise((resolve,reject)=>{
//         console.log('function A');
//         resolve()

//     })
// }

// function B() {
//     return new Promise((resolve,reject)=>{
//         console.log('Function B')
//         resolve()
//     })
// }

// function C() {
//     return new Promise((resolve,reject)=>{
//          console.log('Function C');
//          resolve()

//     })
// }

// async function result() {
//    try {

//     await A()
//     await B()
//     await C()

//    } catch (error) {
//     console.log(error);

//    }

// }
// result()

// function* gen() {

//     yield 1
//     yield 2
//     yield 3
// }

// const res=gen()

// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);

// function* gen(n) {
//   for (let i = 1; i <= n; i++) {
//     yield i * 5;
//   }
// }

// const res=gen(5)

// for (let i = 1; i <=5; i++) {

//     console.log(res.next().value);

// }

// const obj ={name:'nithin'}

// const weakMap=new WeakMap()

// weakMap.set(obj,'developer')

// console.log(weakMap.get(obj));

// console.log(this);


// const user={}

//  const proxyUser=new Proxy(user,{

//     set(target,prop,value){
//        target[prop]= typeof value ==="string" ?value.toUpperCase()  :value
//        return true
//     }

//  })


// let user={
//     dob:"17/11/2002"
// }


// const proxyUser=new Proxy(user,{
//   get(target,prob){
 
//         const [D,M,Y]=target.dob.split('/').map(Number)
//         console.log('.D.',D);
//         console.log('.M.',M);
        
//         const age = new Date().getFullYear() - Y;
//         console.log(age);
        
    
//     return age >= 18 ? "Adult" : "Not Adult";

//   }
// })
// console.log(proxyUser.isAdult);


// mergeTwoSortedLists(list1, list2) {
//         let dummy = new Node(0)
//         let curr = dummy;

//         while (list1 && list2) {
//             if (list1.value < list2.value) {
//                 curr.next = list1
//                 list1 = list1.next
//             } else {
//                 curr.next = list2;
//                 list2 = list2.next;
//             }
//             curr = curr.next
//         }

//         if (list1) curr.next = list1;
//         if (list2) curr.next = list2;

//         return dummy.next;
//     }