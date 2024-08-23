// //BEGINNER FRIENDLY QUESTIONS
// //31/31

// //que-1
// console.log("hello,World!")


// //que-2
// let x=34
// let y=29
// console.log(x+y)


// //que-3
// let a= 10;
// let b= 70;
// let c= 15;
// let largestNum;

// if (a > b & a> c) {
//   largestNum = a;
// } 
// else if (b > a & b > c) {
//   largestNum = b;
// } 
// else {
//   largestNum = c;
// }

// console.log(largestNum);


// //que-4
// let d= 57;
// if (d & 1) {
//     console.log(d + " is odd");
// } else {
//     console.log(d + " is even");
// }


// //que-5
// var number=3;
// var factorial=1;
  
// for(i=1;i<=number;i=i+1){
//       factorial=factorial*i;
// }
  
// console.log(factorial);


// //que-6(chatgpt)
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("snajir")); 


// //que-7(chatgpt)
// function isPalindrome(s) {
  
//     return s===s.split('').reverse().join('');
// }
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('rijans'));


// //que-8(chatgpt)
// function findSmallestNumber(arr) {
//     if (arr.length === 0) {
//         return undefined; 
//     }
    
//     let smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }

//     return smallest;
// }


// const numbers = [5, 2, 9, 7];
// console.log(findSmallestNumber(numbers));


// //que-9
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }
// const sss = [3,1,4,1,5];
// const sortedsss = sortArray(sss);
// console.log(sortedsss); 


// //que-10
// function containsSubstring(str, substr) {
//     for (i = 0; i < str.length; i++) {
//       for (j = 0; j < substr.length; j++) {
//         if (str[i + j] !== substr[j]) break;
//       }
//       if (j === substr.length) return true;
//     }
//     return false;
//   }
  
//   console.log(containsSubstring('hello world', 'world'));


// //que-11
// let arry=[1,2,3,22]
// let sum=0
// for(let ele of arry){
//     sum+= ele
// }
// console.log(sum)


// //que-12
// function fibonacci(n) {
//     let fib = [0, 1]; // Starting values for the series
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2]; // Compute the next Fibonacci number
//     }
//     return fib.slice(0, n); // Return the first n Fibonacci numbers
//   }
  
//   console.log(fibonacci(11))
  

// //que-13
// function isPrime(n){
//     if (n<=1) return false;
//     for(let i=2;i*i<=n;i++){
//       if(n%i===0) return false;
    
//     }console.log(n,"is a prime number");
//     }console.log(isPrime(2)); 
    

// //que-14
// let value="hello"
// a=value.split("")  
// count=0;
// for (i of a){
    
//     if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//         count+=1;
        
//     }
// }console.log("the number of vowels in string is",count)


// //que-15
// let index=[1,2,3,4,8,]
// console.log(index.indexOf(10))


// //que-16
// let arr = ["apple", "mango", "apple",
//     "orange", "mango", "mango"];
  
//   function removeDuplicates(arr) {
//   return arr.filter((item,
//   index) => arr.indexOf(item) === index);
//   }
//   console.log(removeDuplicates(arr));  
//   console.log(arr.length) 
  

// //que-17
// function findIntersection(arr1, arr2) {
//     return arr1.filter(element => arr2.includes(element));
// }

// // Test the function
// console.log(findIntersection([1, 2, 3], [2, 3, 4]))


// //que-18
// function areAnagrams(str1, str2) {
    
//     str1 = str1.replace(/[^\w]/g, '').toLowerCase();
//     str2 = str2.replace(/[^\w]/g, '').toLowerCase();

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(areAnagrams('listen', 'silent'))


// //que-19
// function capitalizeWords(str) {
//     return str
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//         .join(' '); 
// }

// console.log(capitalizeWords('hello world'))


// //que-20
// function flattenArray(arr) {
//     return arr.reduce((acc, val) => 
//         Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));


// //que-21
// a=1
// b=10
// let range=(a,b)=>{
//   for(i=a;i<=b;i++){
//     console.log(i)
//   } 
// }
// console.log(range(a,b)) 

// //que-22
// function isValidEmail(email) {
  
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }


// console.log(isValidEmail('test@example.com'));  
// console.log(isValidEmail('invalid-email@.com'));  


// //que-23
// celcius=1
// fahrenhit=(celcius*9/5)+32
// console.log(fahrenhit)


// //que-24
// let arra=[1,2,3,4,5]
// b=1
// a=delete(arra[b])
// console.log(arra)


// //que-25
// function findSecondLargest(val) {
//   let first = -Infinity;
//   let second = -Infinity;

//   for (const num of val) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num < first) {
//       second = num;
//     }
//   }

//   return second;
// }
// const val = [10, 5, 20, 8, 15];
// console.log(findSecondLargest(val)); 


// //que-26
// function longestWord(str) {
//   const words = str.split(' ');
  
//   return words.reduce((longest, currentWord) => {
//       return currentWord.length > longest.length ? currentWord : longest;
//   }, "");
// }

// console.log(longestWord('The quick brown fox jumped over the lazy dog')); 


// //que-27
// function findMissingNumber(arr) {
//   const n = arr.length + 1; 
//   const expectedSum = (n * (n + 1)) / 2; 
//   const actualSum = arr.reduce((acc, num) => acc + num, 0); 
//   return expectedSum - actualSum; 
// }


// console.log(findMissingNumber([1, 2, 4, 5, 6])); 


// //que-28
// function gcd(a, b) {
//   a = Math.abs(a);
//   b = Math.abs(b);

//   while (b != 0) {
//     let temp = b;
//     b = a % b; 
//     a = temp; 
//   }
  
//   return a;
// }
// console.log(gcd(18,12));


// //que-29
// a=4
//  b=6
// const lcm =(a,b)=>{
//   for(i=0;i<=30;i++){
//     c=i*a
//     d=c%b==0
//     if(d&&c!=0){
//       return ("Lcm of 'a' and 'b' is",c)
//     }
//   }
// }

// console.log(lcm(a,b))
//                           //  Or
// for(i=0;i<=30;i++){
//   c=i*a
//   d=c%b==0
//   if(d&&c!=0){
//     console.log("Lcm of 'a' and 'b' is",c)
//     break
//   }
// }


// //que-30
// function isBalanced(str) {
//   const stack = [];

//   for (let char of str) {
//       if (char === '(') {
//           stack.push(char); 
//       } else if (char === ')') {
//           if (stack.length === 0) {
//               return false; 
//           }
//           stack.pop(); 
//       }
//   }

  
//   return stack.length === 0;
// }


// console.log(isBalanced('()'));  
// console.log(isBalanced('(())'));  
// console.log(isBalanced('(()'));  


// que-31
// function rotateArray(arr, k) {
//   return arr.slice(-k).concat(arr.slice(0, -k));
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 