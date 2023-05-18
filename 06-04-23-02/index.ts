

var x:number = 30;
x = 40

let b:string = "sudhanshu"


function add(a:number,b:number):string{
    return (a+b+"")
}

console.log(add(1,2))


var arr : [number,string,number] = [1,"sudhanshu",1];

console.log(arr)
  

class Test {
    value:number
    constructor(value){
        value = value
    }
}

// var myObj = new Test(20);
// console.log(myObj.value);


// let person = {
//     name:string,
//     age:20
// }


interface person{
    name:string,
    age:number
}

let p:person;
p={name:"sudhansu",age:20}

interface person2{
    name:string,
    age?:number
}

let p1:person2 = {name:"sudhanshu",age:24}
let p2:person2 = {name:"kumar"}


function gen<T>(a:T,b:T):[T,T]{
    return [a,b]
}


console.log(gen<number>(1,2))
console.log(gen<string>('1','2'))



    