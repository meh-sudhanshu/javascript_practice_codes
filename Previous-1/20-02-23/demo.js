

// // // var s = "sudhanshu"

// // // var ans =""

// // // for(var i=s.length-1;i>=0;i--){
// // //     ans+=s[i]
// // // }


// // // console.log(ans)


// // var arr = [2,3,4]


// // function doJob(v,i,arr){
// //     console.log(v,i,arr)
// // }



// // arr.forEach(doJob)


// // function doJob(){
// //     console.log("hi")
// // }



// // (   
// //     ()=>{
// //         return "hello"
// //     }
// // )()







// var myMap = new Map()

// myMap.set("x",20)
// myMap.set("y",60)

// console.log(myMap.get("x"))





var stack = []

function pop(){
    return stack.pop()
}

function push(val){
   stack.push(val)
}

function printStack(){
    for(var i=0;i<stack.length;i++){
        process.stdout.write(stack[i]+" ")
    }
}

function size(){
    return (stack.length)
}

function peek(){
    if(stack.length == 0){
        console.log("stack is empty")
    }else{
        console.log(stack[stack.length-1])
    }
}
push(20)
push(30)
push(40)
pop()
printStack()
console.log(size())
peek()
console.log(size())






