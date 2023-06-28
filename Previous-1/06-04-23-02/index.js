// var x = 30;
// x = 40;
// var b = "sudhanshu";
// function add(a, b) {
//     return (a + b + "");
// }
// console.log(add(1, 2));
// var arr = [1, "sudhanshu", 1];
// console.log(arr);
// var x;
// x.push('s');
// var Test = /** @class */ (function () {
//     function Test(value) {
//         value = value;
//     }
//     return Test;
// }());
// var p;
// p = { name: "sudhansu", age: 20 };
// var p1 = { name: "sudhanshu", age: 24 };
// var p2 = { name: "kumar" };
// function gen(a, b) {
//     return [a, b];
// }
// console.log(gen(1, 2));
// console.log(gen('1', '2'));






var n = 5
var col = n
// var col = 2*n-1
// // console.log(n)
// // console.log(col)
// var start = n
// var end = n

// for(var i=0;i<n;i++){
//     var flag = true
//     for(var j=0;j<col;j++){
        
//         if(j>start && j<end){
//             if(flag){
//                 process.stdout.write("*")
//                 flag = !flag
//             }else{
//                 process.stdout.write(" ")
//                 flag = !flag
//             }
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     start-=1
//     end+=1
//     console.log()
// }


for(var i=0;i<n;i++){
    var chr = 'A'
    for(var j=0;j<col;j++){
        if(j<=i){
            process.stdout.write(chr)
            let unicodeValue = chr.charCodeAt(0); // get the Unicode value of the character
            unicodeValue++; // increase the Unicode value
            let increasedChar = String.fromCharCode(unicodeValue);
            chr = increasedChar
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}


