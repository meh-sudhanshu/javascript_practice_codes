
// var start = null

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// function createList(arr){
//     for(var ele of arr){
//         if(start === null){
//             var temp_node = new Node(ele)
//             start = temp_node
//         }else{
//             var temp = start;
//             while(temp.next != null){
//                 temp = temp.next
//             }
//             var temp_node = new Node(ele)
//             temp.next = temp_node
//         }
//     }
// }




// createList([100,23,43,56,78,99,101])

// printList(start)




// function reverseList(){
//     var stack =[]
//     var temp = start
//     while(temp!=null){
//         stack.push(temp.value)
//         temp=temp.next
//     }
//     temp = start
//     while(temp!=null){
//         temp.value = stack.pop()
//         temp = temp.next
//     }

// }
// console.log("reversed list")
// reverseList()
// printList(start)







class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

var start = null // my list is currently empty
function createList(arr){
    // convert arr in to a double linked list
    for(var e of arr){
        var new_node = new Node(e)
        if(start === null){
            start = new_node
        }else{
            var temp = start
            while(temp.next !=null){
                temp=temp.next
            }
            temp.next = new_node
            new_node.prev = temp
        }
    }
}

function printList(start){
    var temp = start;
    while(temp !== null){
        console.log(temp.value)
        temp = temp.next
    }
}


function addToStart(value){
    var new_node = new Node(value)
    if(start === null){
        start = new_node
    }else{
        new_node.next = start
        start = new_node
    }
}
function deleteAtEnd(){
    if(start === null){
        console.log("nothing to delete")
    }if(start.next === null){
        start = null
    }
    else{
        var temp = start
        while(temp.next.next != null){
            temp = temp.next
        }
        temp.next = null
    }
}




function deleteFromStart(){
    if(start === null){
        console.log("nothing to delete")
    }else{
        start = start.next
    }
}
function addAtEnd(value){
    var new_node = new Node(value)
    if(start === null){
        start = new_node
    }else{
        while(temp.next != null){
            temp = temp.next
        }

        temp.next = new_node
        new_node.prev = temp
    }
}




createList([-2,23,45,67,87])
addToStart(-100)
deleteAtEnd()
printList(start)
