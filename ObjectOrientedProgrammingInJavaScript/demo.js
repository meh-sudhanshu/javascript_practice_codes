

// // // // // class Vechile{
// // // // //     constructor(numberOfTyres,numberOfMirrors,isEngineAvailbe,isBreakAvailable){
// // // // //         this.numberOfTyres = numberOfTyres;
// // // // //         this.numberOfMirrors = numberOfMirrors;
// // // // //         this.isEngineAvailbe = isEngineAvailbe;
// // // // //         this.isBreakAvailable  = isBreakAvailable
// // // // //     }

// // // // //     printDetail(){
// // // // //          console.log("number of tyres is "+this.numberOfTyres,this.numberOfMirrors,this.isEngineAvailbe,
// // // // //              this.isBreakAvailable)
// // // // //     }
// // // // // }

// // // // // var car = new Vechile("41",'6',true,true)
// // // // // car.printDetail()

// // // // // var bike = new Vechile("2","1",true,true)
// // // // // bike.printDetail()



// // // // // const Person ={
// // // // //     name:"sudnashu",
// // // // //     printValue : function printValue(name,gender,age){
// // // // //         console.log(name,gender,age)
// // // // //    }
// // // // // }
// // // // // //Person.name = "Komal"

// // // // // const p1 = Object.create(Person)
// // // // // p1.name ="sudhanshu"
// // // // // console.log(p1.name)

// // // // // const p2 = Object.create(Person)
// // // // // p2.name ="komal"
// // // // // console.log(p2.name)

// // // // // p1.printValue("sudhanshu",'M',"22")




// // // // class Person{
// // // //     constructor(name,email,gender,age){
// // // //         this.name = name;
// // // //         this.email = email;
// // // //         this.gender = gender;
// // // //         this.age = age
// // // //     }

// // // //     printDetail(){
// // // //         console.log(this.name, this.email, this.age, this.gender)
// // // //     }
// // // // }

// // // // var p1 = new Person("sudhanshu","s@gmail.com",'M',24)
// // // // p1.printDetail()


// // // // var p2 = new Person("Manisha","m@gmail.com",'F',25)
// // // // p2.printDetail()


// // // //  crate a class MathematicalOperations
// // // // this class it should implement +,-,*,/,%

// // // class MathematicalOperations{
// // //     // constructor(num1,num2){
// // //     //     this.add1 = num1+num2
// // //     //     this.mul = num1*num2
// // //     // }
// // //     add(num1,num2){
// // //         console.log(num1+num2)
// // //     }
// // //     multiply(num1,num2){
// // //         console.log(num1*num2)
// // //     }
// // // }

// // // var obj = new MathematicalOperations()
// // // //console.log(obj.add1)
// // // obj.add(2,3)
// // // obj.multiply(10,12)

// // var arr =[2,3,4,5]


// // function doJob(value , index , arr){
// //     console.log(value , index ,arr)

// // }


// // arr.forEach(doJob)



// // function doJob(num1 , num2){
// //     console.log(num1+num2)
// // }

// // doJob(2,3)

// // function doJob2(){
// //     console.log("hello")
// // }


// class Test{

//     constructor(num){
//         // console.log(num)
//         console.log("object has been created")
//     }
// }

// var t = new Test()
// var t2 = new Test()

class Test{
    constructor(){
        this.a = 20
        this.b = 30
        this.c = 90
    }
    doJob(){
        console.log("method of object has been called")
    }
}
var t = new Test()
console.log(t.a , t.b , t.c)
t.doJob()


