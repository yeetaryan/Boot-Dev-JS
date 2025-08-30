//Primitive
//7 types:String,Number,Boolean,Null,Undefined,Symbol,BigInt
//Reference(Non-primitive)
//Array,Objects,Functions
const score=100
const scoreValue=3.0
const isLoggedIn=false
const outsideTemp=null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const heroes=["shaktiman","nagarjuna","doga"]
// let myObj={
//     name:'hitesh',
//     age:22,
// }
const myFunction=function(){
    console.log("Hello World")
}
myFunction();
//typeof refer to Docs
console.log(typeof myFunction)
// https://262.ecma-international.org/5.1/#sec-11.4.3