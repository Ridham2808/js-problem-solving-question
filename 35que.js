// // que-1
// console.log("hello world")


// //que-2
// let a =10;
// let b = 15;

// let sum = a+b;
// console.log(sum);


// //que-3
// let a = 10;
// let b = 15;

// if(a>b){
// console.log(a);
// }else{
// console.log(b);
// }


// //que-4
// let a = 10;

// if(a%2==0){
// console.log(a+" is even");
// }else{
// console.log(a+" is odd ");
// }


// //que-5
// let num = 5;
// let factorial = 1;

// for(let i=1;i<=num; i++){
// factorial *= i;
// }
// console.log(factorial);


// //que-6 (for reverse a number)
// function reverseNumber(num){
//     if(num>0 && num<=9){
//         return num;
//     }
//     let reverseNum = 0;
//     while(num !==0){
//         reverseNum = reverseNum *10 +(num%10);
//         num = Math.floor(num/10);
//     }
//     return reverseNum;
// }
// console.log(reverseNumber(987654321));

// //for string hello
// function reversedstr(str){
//     str = str.toLowerCase();

//     let reverseStr = str.split('').reverse().join('');
//     return reverseStr;
// }
// console.log(reversedstr("hello"));


// //Que-7 Guess that it is palindrome or not
// let num=121;
// let sum=0;
// for(i=num;i>0;){
//    r=i%10;
//    sum=sum*10+r;
//    i=[i-r]/10  
// } if(num==sum){
//     console.log(num,"Is a palindrome")
// }else{
//     console.log(num,"It is not a palindrome")
// }


// //que-8 sum of the digits 
// let num=125;
// let sum=0;
// for(i=num;i>0;){
//     r=i%10;
//     sum=sum+r;
//     i=[i-r]/10
// }console.log(sum)


// //que-9 prime number check
// let num=121;
// let temp=0;
// for(i=2;i<num;i++){
//     if(num%i==0){
//         temp=temp+1;
//     }
// }if(temp==0){
//     console.log(num,"Is a prime number")
// }else{
//     console.log(num,"Is not s prime number")
// }


// //que-10 Fibonacci series 
// let a=0;
// console.log(0);
// let b=1;
// console.log(b);
// let value=9;
// for(i=0;i<value-2;i++){
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c)
// }


// //que-11 swapping two numbers  without using third value
// let a=1;
// let b=2;
// let c=a;
// a=b;
// b=c;
// console.log(a,b)


// //que-12 swapping two numbers with using third value
// let a=2;
// let b=3;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a)
// console.log(b)

// //swapping of three numbers
// let a=1;
// let b=2;
// let c=3;
// let d=a;
// a=c;
// b=b;
// c=d;
// console.log(a,b,c)

// //swapping of three numbers without using third variable
// let a=1;
// let b=2;
// let c=3;
// a=a+c-b;
// b=b+c-b;
// c=b-a;
// console.log(a,b,c)


// //que-13 Leap year check
// let year=2024;
// let a=year/2;
// let b=a%2;
// if(b==0){
//     console.log(year,"Is a leap year");
// }else{
//     console.log(year,"Is not a leap year ");
// }


// //QUE-14(Simple calculator)
// let a=4;
// let b=5;
// let c='+';
// let e=a+b;
// let f=a-b;
// let g=a*b;
// let h=a/b;
// let i=a%b;
// if(c=='+'){
//     console.log(e);
// }else if(c=='-'){
//     console.log(f);
// }else if(c=='*'){
//     console.log(g);
// }else if(c=='/'){
//     console.log(h);
// }else if(c=='%'){
//     console.log(i);
// }


// //que-15 sum of an array element 
// let array=[4,5,6,7];
// let sum=0;
// for(let ele of array){
//     sum+=ele;
// }console.log(sum);


// //que-16 largest element in an array
// let array=[1,-9,-5,8];
// let temp=array[0];
// for(i=0;i<array.length;i++){
//     if(temp<array[i]){
//         temp=array[i];
//     }
// }console.log(temp)


// //que-17 string length 
// let str="ridham"
// console.log(str.length)


// //que-18 Reverse a string 
// let str="ridham";
// a=str.split('').reverse().join('');
// console.log(a);


// //que-19 Gcd of two numbers 
// let a=4;
// let b=8;
// let gcd=0;
// for(i=0;i<=a && i<=b;i++){
//     if(a%i==0&&b%i==0){
//         gcd=i;
//     }
// }console.log(gcd)


// //que-20 lcm 
// let a=4;
// let b=6;
// let c=a*b;
// const lcm =(a,b)=>{
// for(i=0;i<c;i++){
//     d=b*i;
//     e=d%a==0;
//     if(d&&e!=0){
//     return ("Lcm of 'a' and 'b' is",d) 
//     }
// }
// }
// console.log(lcm(a,b))



// //Que-21 ascii value;
// let ch = 'c';
// let asciiValue = ch.charCodeAt(0);
// console.log(asciiValue); 


// //que-22 converting celsius into fahrenheit
// let celsius=4;
// let fahrenheit=(celsius*9/5)+32;
// console.log(fahrenheit)


// //que-23 fahrenheit into celsius 
// let fahrenheit=253;
// let celsius=(fahrenheit-32)*5/9
// console.log(celsius)


// //que-24 sum of first n natural numbers 
// let value=5;
// let sum=0;
// for(i=0;i<=value;i++){
//     sum=sum+i
// }console.log(sum)


// //Que-25 Check vowel or consonant
// let value='c';
// if(value==='a'||value=='e'||value=='i'||value=='o'||value=='u'||value=='A'||value=='E'||value=='I'||value=='O'||value=='u'){
//     console.log(value,"It is a vowel ")
// }else{
//     console.log(value,"It is a consonant")
// }


// //Que-26 Check Alphabet, Digit, or Special Character
// let value='+';
// let av=value.charCodeAt(0);
// if(av>=48&&av<=57){
//     console.log(value,"Is a digit")
// }else if(av>=67&&av<=90 ){
//     console.log(value,"Is a alphabet")
// }else if(av>=1&&av<=32){
//     console.log(value,"Is a button")
// }else if(av>=33&&av<=47){
// console.log(" is a special chararcter")
// }else if(97<=av&&av<=122){
//     console.log(value,"Is a alphaet")
// }


// //que-27 count no of digits 
// let num=123456 ;
// a=num.toString().split('').length
// console.log(a)


// //que-28 reverse a string 
// let str="Jatin"
// let a=str.split('').reverse().join('')
// console.log(a)

// //que-29 (finding lcm)
// a = 4
// b = 6
// const lcm = (a, b) => {
//     for (i = 0; i <= 30; i++) {
//         c = i * a
//         d = c % b == 0
//         if (d && c != 0) {
//             return ("Lcm of 'a' and 'b' is", c)
//         }
//     }
// }

// console.log(lcm(a, b))
// //  Or
// for (i = 0; i <= 30; i++) {
//     c = i * a
//     d = c % b == 0
//     if (d && c != 0) {
//         console.log("Lcm of 'a' and 'b' is", c)
//         break
//     }
// }


// //que-30 calculating the power of number
// let a=Math.pow(10,2);
// console.log(a);


// //que-32 for checking a armstrong number(problem)
// let num=1635;
// let a=num.toString().split('')
// let c=a.length
// let d=0
// for(i=0;i<a.length;i++){
//    d=d+Math.pow(a[i],c)
// }
// if(d==num){
//     console.log(num,"Is a armstrong number ")
// }else{
//    console.log(num,"It is not a armstrong number")
// }



// //que-34(for finding second max number)
// let arr=[2,3,4,5];
// let max=arr[0];
// let secmax=arr[0];
// for(i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];

//     }
// }console.log(max)
// for(i=0;i<arr.length;i++){
//     if(secmax<arr[i]&&arr[i]!=max){
//         secmax=arr[i]
//     }
// }console.log(secmax)


//que-35(for checking perfect square root)
// let num=26;
// for(i=1;i<=num;i++){
//     if(num==i*i){
//         console.log("Is perfect square")
//     }
// }if(num!=i*i){
//     console.log("False")
// }
