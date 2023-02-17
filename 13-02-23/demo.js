

// // // for(var i=0;i<=100;i++){
// // //     if(i==51){
// // //         break
// // //     }else{
// // //         process.stdout.write(i+" ")
// // //     }
// // // }

// // for(var i=0;i<=100;i++){
// //     if(i==21 || i==31) continue
// //     if(i==51) break
// //     process.stdout.write(i+" ")
// // }


// var arr = [2,2,2,3,4,5,6,3,6]

// var x = new Set(arr)

// x.add(10)
// x.add(10) // this line will not produce any error , but 10 will not get inserted in our set
// console.log(x)
// console.log(typeof x)


//var arr = [2,3,2,1,2,4,5,6,7,8,9]

var x = new Set([2,3,2,1,2,4,5,6,7,8,9])


x.forEach(doJob)

function doJob(value,index,x){
    //index nothing but just the value , in set we don't have concept of indexing
    console.log(value,index,x)
}


