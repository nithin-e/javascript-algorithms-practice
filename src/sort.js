// function bubleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   return arr
// }

// let arr=[6,4,2,1,34,22]

// console.log(bubleSort(arr));

// function insersationSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   return arr;
// }

// let arr = [6, 4, 2, 1, 34, 22];

// console.log(insersationSort(arr));

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }

//    let temp=arr[minIndex]
//    arr[minIndex]=arr[i]
//    arr[i]=temp
//   }
//   return arr
// }

// let arr = [6, 4, 2, 1, 34, 22];

// console.log(selectionSort(arr));

// function Qucksort(arr) {
//     if (arr.length==0) {
//         return arr
//     }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length-1; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...Qucksort(left),pivot,...Qucksort(right)]
// }


// let arr = [6, 4, 2, 1, 34, 22];

// console.log(Qucksort(arr));


function MergeSort(arr) {

    if (arr.length<=1) {
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return Merge(MergeSort(left),MergeSort(right))

    function Merge(left,right) {
        let result=[]
        let leftIndex=0
        let rightIndex=0
        while (leftIndex<left.length&&rightIndex<right.length) {
            if (left[leftIndex]<right[rightIndex]) {
                result.push(left[leftIndex])
                leftIndex++
            }else{
                result.push(right[rightIndex])
                rightIndex++

            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }
}

let arr = [6, 4, 2, 1, 34, 22];

console.log(MergeSort(arr));
