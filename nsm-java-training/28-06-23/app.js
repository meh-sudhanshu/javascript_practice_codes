// arr = {
//     name_:"neha",
//     age:24
// }

// // for(var i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }

// for(var index in arr){
//     console.log(index)
// }



// for(var index in arr){
//     console.log(arr[index])
// }
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(var x of arr){
//     console.log(x)
// }

// for-in loop in case of array will give index
// for-of loop will the give element
// callback functions are function which we pass as an argument to another function
var arr = [10,23,34,56,-89]

function iterate(ele, index, arr){
    console.log(ele, index, arr)
}

arr.forEach(iterate)

// const a = 30
// console.log(a)







// const obj = {
//     x:20,
//     y:30,
//     z: function(){

//     }
// }


