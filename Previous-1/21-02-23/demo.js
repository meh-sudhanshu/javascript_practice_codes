


// function doJob(value){
//     var stack =[]
//     for(var i=0;i<value.length;i++){
//         stack.push(value[i])
//     }

//     var count = stack.length / 2;

//     while(count>0){
//         stack.pop()
//         count-=1
//     }
//     for(var v of stack){
//         console.log(v)
//     }
// }

// doJob("sudhanshu")









// function isPalindrome(value){
//     var stack = []
//     for(var i=0;i<value.length;i++){
//         stack.push(value[i])
//     }
//     var i = 0;
//     while(stack.length != 0){
//         if(value[i] != stack[stack.length-1]){
//             return "not a palindrome"
//         }else{
//             i+=1
//             stack.pop()
//         }
//     }

//     return "pliandrome"
// }

// console.log(isPalindrome("abccba"))
// console.log(isPalindrome("absdfe"))


function doJob(num){

    var stack = []

    while(num !=0){
        stack.push(num%10);
        num = parseInt(num/10)
    }
    //stack.push(num%10)
    for(var v of stack){
        process.stdout.write(v+" ")
    }
}

doJob(2089)














