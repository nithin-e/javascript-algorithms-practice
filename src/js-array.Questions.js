// 1. Remove Duplicates Without Using Set

// function removeDuplicates(arr) {
//   const freq = {};
//   for (let num of arr) {
//     if (freq[num]) {
//       freq[num]++;
//     } else {
//       freq[num] = 1;
//     }
//   }

//   let res = [];

//   for (let i in freq) {
//     if (freq[i] == 1) {
//       res.push(Number(i));
//     }
//   }

//   return res;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 2. Find the Second Largest Number

function secondLargest(arr) {

    let Largest=0
    let secondLargest=0

    for(let i=0;i<arr.length;i++){
      if(arr[i]>Largest){
        secondLargest=Largest
         Largest=arr[i]
      }else if(arr[i]>secondLargest&&secondLargest!==Largest){
         secondLargest=arr[i]
      }
    }

    return secondLargest
}

console.log(secondLargest([10, 5, 8, 20, 3]) );

function flatten(arr) {
    let result=[]
 for(let num of arr){
    if (Array.isArray(num)) {

        result=result.concat(flatten(num))
    }else{
        result.push(num)
    }
 }

return result

}
console.log(flatten([1, [2, [3, 4], 5]]))

// 5. Find Pairs With a Given Sum

function pairSum(arr,target) {

    let pairs=[]
    for (let i = 0; i < arr.length; i++) {
          for (let j = i+1; j < arr.length; j++) {
               if (arr[i]+arr[j]==target) {
                  pairs.push([arr[i],arr[j]])
                  break
               }
          }

    }

    return pairs
}

console.log(pairSum([1, 3, 2, 2, 4, 5], 5));

// 6. Rotate an Array by k Positions

function rotate(arr, target) {
  for (let i = 0; i < target; i++) {
    const last= arr[arr.length-1]
     arr.pop()
     arr.unshift(last)

  }

  return arr
}

console.log(rotate([1, 2, 3, 4, 5], 2))

// 7. Find the Missing Number in a Range

function missing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 != arr[i]) {
      return i + 1;
    }
  }
}

console.log(missing([1, 2, 4, 5]));

function chunk(arr, target) {


  let res = [];

  let de = Math.floor(arr.length / target);
  console.log('this is de',de)

  let i = 0;
   
  while (i < arr.length) {
   if (de) {
    
   }
  }


  console.log('hello world ',res)
}

chunk([1, 2, 3, 4, 5, 6, 7], 3); // [[1,2,3],[4,5,6],[7]]

