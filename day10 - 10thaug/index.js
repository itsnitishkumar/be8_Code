// 'use strict'

// const obj1 = {
//     "key1" : 'val1',
//     "key2" : 'val2',
//     "key3" : 'val3'
// }

// to access values
// console.log(obj1['key1'])
// console.log(obj1.key2)
// console.log(obj1.key3)

// update
// obj1.key3 = 'somethingelse'
// console.log(obj1)

//delete
// delete obj1.key2


// For Freeze
// Object.freeze(obj1)
// console.log(Object.isFrozen(obj1));
// obj1.key4='val4'  //create
// console.log(obj1.key1);  //read
// obj1.key3='val4'  //update
// delete obj1.key2  //delete
// console.log(obj1);


// For Seal
// Object.seal(obj1)
// console.log(Object.isSealed(obj1));
// obj1.key4='val4'  //create
// console.log(obj1.key1);  //read
// obj1.key3='val4'  //update
// delete obj1.key2  //delete
// console.log(obj1);


// For Extensible
// Object.preventExtensions(obj1)
// console.log(Object.isExtensible(obj1));
// obj1.key4='val4'  //create
// console.log(obj1.key1);  //read
// obj1.key3='val4'  //update
// delete obj1.key2  //delete
// console.log(obj1);


// ===--===============================

arr=[1,2,3,4]

// arr=arr.map(i=>i*2)
// arr= arr.filter(i=>{   
    // console.log('dbfjhbsdc');  
    // return i%2==0
// })
arr=arr.reduce((acc, ele)=>{
    console.log(acc);
    return acc+ele
})
console.log(arr);


// console.log(arr);