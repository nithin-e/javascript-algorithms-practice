// function sum(arr,i=0,summ=0) {

//     if (arr.length==i) {
//         return summ
//     }

//     return sum(arr,i+1,summ+=arr[i])

// }

// let arr=[11,22,33,44,55]

// console.log(sum(arr));

// function evenSum(arr, i = 0, sum = 0) {
//     if (arr.length == i) {
//         return sum
//     }

//     if (arr[i] % 2 == 0) {
//         sum += arr[i]
//     }

//   return evenSum(arr,i+1,sum)

// }

// let arr = [10, 2, 23, 22, 1]

// console.log(evenSum(arr));

// function reverceSring(str, i = str.length - 1, newStr = "") {
//   if (i < 0) {
//     return newStr;
//   }

//   return reverceSring(str, i - 1, (newStr += str[i]));
// }

// let str = "junaidh";

// console.log(reverceSring(str));


// function minValue(arr,i=0,max=-Infinity) {
    
//     if (arr.length==i) {
//         return max
//     }

//     if (arr[i]> max) {
//         max=arr[i]
//     }

//     return minValue(arr,i+1,max)
// }


// let arr=[22,33,5,22,55,29]

// console.log(minValue(arr))