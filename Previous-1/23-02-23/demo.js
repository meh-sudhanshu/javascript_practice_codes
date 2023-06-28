var arr = [1,2,4,7,3,8,-2,10]
var size = 3
var i =0 , j = size-1
var ans = 0;

while(j<arr.length){
    var temp_ans = 0
    for(var k=i;k<=j;k++){
        temp_ans+=arr[k]
    }
    if(temp_ans > ans){
        ans = temp_ans
    }
    i+=1
    j+=1
}

console.log(ans)