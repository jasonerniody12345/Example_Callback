// console.log('69')

// setTimeout(() => {
//   console.log('hello')
// }, 500)

// console.log('jason')


// asynchronous VS synchronous

// dipake ketika:
// 1. Request ke server
// 2. file 
// 3. database


// teknik asynchronous:
// 1. Callback
// 2. Promise
// 1. Async/Await



// CALLBACK

// function, beda nya dengan function biasa adalah cara eksekusi nya.
// biasa dieksekusi dari atas ke bawah, kalo callback dieksekusi pada point tertentu. itu kenapa namanya callback


// kapan callback digunakan?
// digunakan untuk proses synchronous ato asynchronous
// example: 
//    -get data from server
//    -event listener
//    -handle asynchronous process


// function main(param1, param2, callBack) {
//   console.log(param1, param2)
//   callBack()
// }

// function myCallback() {
//   console.log('hello dari callback')
// }

// main(1, 2, myCallback)



// 1. CALLBACK SEBAGAI INJEKSI FUNCTION
// function calculate (x, y, callback) {
//   var result = x + y

//   if(typeof callback == 'function') {
//     result = callback(x, y)
//   }
//   return result 
// } 


// var operator = function(x, y) {
//   return "$"+(x+y)
// }

// console.log(calculate(10, 2, function(x, y) {
//   return "IDR"+(x*y)
// }))




// CALLBACK PADA ASYNCHRONOUS
// function p1 () {
//   console.log('p1 done')
// }

// function p2 (callback) {
//   // pura pura nya ada proses async di dalem p2
  
//   setTimeout(() => {
//     console.log('p2 done')
//     callback()
//   }, 100)
  
// }

// function p3 () {
//   console.log('p3 done')
// }

// p1()
// p2(p3)


// var data = requestDataFromServer() // asynchronous process
// console.log(data) // undefined


// FILE OPERATION
// const fs = require('fs') // file read, write, rename, delete

// fs.readFile('./asse/hello.md', (err, data) => {
//   if(err) {
//     console.log('error read file: ', err)
//   } else {
//     console.log(data.toString())
//   }
// })


// function biasa
// function biasa () {

// }

//  arrow function
// var biasa = (input) => {

}