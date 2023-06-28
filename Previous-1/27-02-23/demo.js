// var arr = [1,2,3,40,50,6]

// var my_map = new Map()
// my_map.set("a",10)
// my_map.set("b",20)
// my_map.set("c",30)


// var my_set = new Set()
// my_set.add(10)
// my_set.add(20)
// my_set.add(30)



// // for an array for-in loop will give you index
// for(var x in arr){
//     //console.log(arr[x])
// }


// // for an array for-of loop will give you value
// for(var x of arr){
//     //console.log(x)
// }

// // for a map for-in loop will give you nothing
// for(var y in my_map){
//     //console.log(y)
// }

// // for of loop on a map will give you key value pair
// for(var x of my_map){
//     //console.log(x[0]," is key",x[1]," is value")
// }

// // for in loop for a set is meaningless
// for(var x in my_set){
//     //console.log(x)
// }

// // arg1, arg2 both are gong to be the value , and arg3 will be whole set
// function doJob(arg1,arg2,arg3){
//     //console.log(arg1,arg2,arg3)
// }


// my_set.forEach(doJob)



// // for-of loop will give you value of set
// for(var x of my_set){
//     //console.log(x)
// }



// /*
//     ---------------------------LINKED LIST------------------------------------------
// */

// class Node{
//     constructor(value,next){
//         this.value = value
//         this.next = null
//     }
// }
// var start = new Node(1);
// for(var i=2;i<=5;i++){
//     var temp_node = new Node(i)
//     var temp = start;
//     while(temp.next != null){
//         temp = temp.next
//     }
//     temp.next = temp_node
// }
// var temp = start;
// while(temp !=null){
//     console.log(temp.value)
//     //console.log(temp.next)
//     temp = temp.next
// }



// //console.log(obj1.next)
// //console.log(obj1.value)


// // var x = new Map()


// // const obj ={
// //     a:20,
// //     b:30,
// //     c:40
// // }

// // console.log(obj.a)
// // console.log(obj.b)
// // console.log(obj.c)



class Node{
    constructor(val,next){
        this.val = val
        this.next = null
    }
}

var arr = ['a','b','c','d']
var start = null
function generateLinkedList(arr){
    for(var val of arr){
        if(start === null){
            var temp_node = new Node(val)
            start = temp_node
        }else{
            var temp = start;
            while(temp.next != null){
                temp = temp.next
            }
            var temp_node = new Node(val)
            temp.next = temp_node
        }
    }

}

function printList(){
    var temp = start
    while(temp != null){
        console.log(temp.val)
        temp = temp.next
    }
}

generateLinkedList(arr)
printList()