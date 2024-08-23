// //OBJECT QUESTION
// //15/15


// //que-1
// let myself={
//     name :"ridham",
//     age :"18",
//     city :"ahmedabad"
// }

// console.log(myself);


// //que-2
// const obje = {
//         name:"ridham patel",
//         age:18
    
//     }
    
//     console.log(obje.age)


// //que-3
// function addProperty(obj, key, value) {
//     obj[key] = value;
// }

// let car = { brand: 'Toyota', model: 'Corolla' };
// addProperty(car, 'year', 2020);
// console.log(car); 

// //que-4
// function deleteProperty(obj, key) {
//     delete obj[key];
// }
// const user = { username: 'john_doe', password: '12345' };
// deleteProperty(user, 'password');
// console.log(user); 

// //que-5
// function hasProperty(obj, prop) {
//     return obj.hasOwnProperty(prop);
// }
// const obj = { name: 'Alice', age: 30 };
// console.log(hasProperty(obj, 'name'));  

// //que-6
// function mergeObjects(r,s) {
//     return { ...r, ...s };
// }
// const r = { a: 1, b: 2 };
// const s = { b: 3, c: 4 };
// console.log(mergeObjects(r, s));

// //que-7
// function cloneObject(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// const original = { name: "alice", details: { age: 30, city: "NYC" } };
// const clone = cloneObject(original);
// clone.details.city = "LA";

// console.log(original.details.city); 
// console.log(clone.details.city); 


// //que-8
// function printProperties(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }

// const use = { name: 'John', age: 30, city: 'New York' };
// printProperties(use);


// // que-9
// const ob={name:"Jatin",Age:19} 
// let d=Object.keys(ob).length 
// console.log(d)
                               
//    let total=0
//    for(let properties in ob){
//     total+=1
//    }                            
//       console.log(total)


// // que-10
// const objec={name:"ridham",Age:19} 
// let array=Object.entries(objec);
// console.log(array)

// //que-11
// const object={name:"ridham",Age:19}
// let value=Object.values(object)
// console.log(value)


// //que-12
// const arr = [{ key1: 'value1' }, { key2: 'value2' }, { key3: 'value3' }];

// const result = Object.assign({}, ...arr);

// console.log(result);


// //que-13
// function groupBy(arr, property) {
//     return arr.reduce((acc, obj) => {
//         const key = obj[property];
        
//         if (!acc[key]) {
//             acc[key] = [];
//         }
//         acc[key].push(obj);
        
//         return acc;
//     }, {}); 
// }
// const ridham = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 30 }
// ];
// console.log(groupBy(ridham, 'age'));


// //que-14
// function findMax(arr, property) {
//     return arr.reduce((maxObj, currentObj) => {
//         return currentObj[property] > maxObj[property] ? currentObj : maxObj;
//     });
// }
// const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 35 }
// ];
// console.log(findMax(users, 'age'));


// //que-15
// function sumProperty(arr, property) {
//     return arr.reduce((total, obj) => total + obj[property], 0);
// }
// const items = [
//     { name: 'item1', price: 10 },
//     { name: 'item2', price: 15 },
//     { name: 'item3', price: 20 }
// ];
// console.log(sumProperty(items, 'price'));  