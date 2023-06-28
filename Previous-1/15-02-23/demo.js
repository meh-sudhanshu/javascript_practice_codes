


// // var myMap = new Map()
// // myMap.set('a',3)
// // myMap.set('b',17)
// // myMap.set('c',6)
// // myMap.set('d',1)

// // // value , index , array


// // // value , key

// // // var isAnsFound = false

// // // function doJob(value , key , myMap){
// // //     if(isAnsFound === true){
// // //         return;
// // //     }
// // //     if(value >=60){
// // //         console.log("There exist a value greater or equal to 60")
// // //         isAnsFound = true
// // //     }
// // // }

// // // myMap.forEach(doJob)

// // // if(isAnsFound === false){
// // //     console.log("There does not exist a value greater or equal to 60")
// // // }



// // // var oddSum = 0
// // // var evenSum = 0

// // // function doJob(value){
// // //     if(value%2 === 0){
// // //         evenSum+=value
// // //     }

// // //     if(value%2 ===1){
// // //         oddSum+=value
// // //     }
// // // }

// // // myMap.forEach(doJob)
// // // console.log("odd sum is ",oddSum)
// // // console.log("even sum is ",evenSum)

// // var keyArr =[]
// // var valueArr = []

// // const doJob = (value,key)=>{
// //     keyArr.push(key)
// //     valueArr.push(value)
// // }

// // myMap.forEach(doJob)
// // var ans =[]
// // for(v in keyArr){
// //     ans.push(keyArr[v])
// // }
// // for(v in valueArr){
// //     ans.push(valueArr[v])
// // }
// // console.log(ans)
// // * , A , 1
// var ch = 'A'
// for(var i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//         process.stdout.write(ch)

//         // find a way to change value in ch to B and so on
//     }
//     console.log()
// }

// // var ch = 'A'




var arr =[['a','b','c'],[2,3,4],[5,6,7]]

var myMap = new Map()

for(var i=0;i<3;i++){
    var key =''
    var value =0
    for(var j=0;j<3;j++){
        if(j==0){
            key = arr[j][i]
        }else{
            value+=arr[j][i]
        }
    }
    myMap.set(key,value)
}

console.log(myMap)




