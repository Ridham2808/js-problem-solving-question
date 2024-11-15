// //array questions
// //16/24

// //que-1  
// let array=[1,2,3,4]
// sum=0
// for(let ele of array){
//     sum+=ele
// }
// console.log(sum)


// //que-2
// let arrays=[1,2,3,4]
// console.log(Math.max(...arrays))


// //que-3
// let arr=[1,2,3,4]
// console.log(Math.min(...arr))


// //que-4
// let second=[15,12,17,13]
// b=second.sort(function(a,b){return a-b})
// console.log(b)


// //que-5
// let sec=[15,12,17,13]
// b=sec.sort(function(a,b){return b-a})
// console.log(b)


// //que-6
// let seco=[15,12,17,13]
// console.log(seco.reverse())


// //que-7
// let ar=[1,5,8,9,]
// contains_element=ar.includes(9)
// console.log(contains_element)


// //que-8
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index)


// //que-9
// let ddd=["1","2","3","2","4","4","5"]
// let result=[...new Set(ddd)]
// console.log(result)


// //que-10
// a=[1,2,3]
// b=[4,5,6]
// console.log(a.concat(b))


// // //que-11
// function findIntersection(arr1, arr2) {
//     const set2 = new Set(arr2);
//     const intersection = arr1.filter(item => set2.has(item));
//     return intersection;
// }
// console.log(findIntersection([1, 2, 3], [2, 3, 4])); 


// //que-12
// function MergeApays(ap1,ap2)
// {
//     let result=[...ap1,...ap2]
   
//     let ans=[...new Set(result)]
//     console.log(ans)
// }

// let ap1=[1,2,3]
// let ap2=[2,3,4]

// MergeApays(ap1,ap2)


// // que-13
// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isSorted([1, 2, 3, 4, 5])); 


// // que-14
// function findDifference(arr1, arr2) {
//     return arr1.filter(element => !arr2.includes(element));
// }
// console.log(findDifference([1, 2, 3], [2, 3, 4])); 


// // que-15
// function rotateArray(arr, k) {
//     k = k % arr.length;
//     return arr.slice(-k).concat(arr.slice(0, -k));
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 


// //que-16
// function maxDifference(arr) {
//     let minElement = arr[0];
//     let maxDiff = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - minElement > maxDiff) {
//             maxDiff = arr[i] - minElement;
//         }
//         if (arr[i] < minElement) {
//             minElement = arr[i];
//         }
//     }

//     return maxDiff;
// }


// console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); 
