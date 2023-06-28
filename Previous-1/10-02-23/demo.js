

function pattern1(n){
    var num=1
    for(var i=1;i<=n;i++){
        for(var j=1;j<=i;j++){
            process.stdout.write(num+"")
        }
        num+=1
        console.log()
    }
}


function pattern2(n){
    for(var i =0;i<n;i++){
        for(var j=0;j<n;j++){
            if(j>=(n-i-1)){
                process.stdout.write("*")
                /*
                    process.stdout.write() is used when after printing a we don't 
                    want to go to a new line
                */
            }else{
                process.stdout.write(" ")
            }
        }
        console.log()
    }
}


function pattern3(n){
    var a=n-1,b=n-1;
    for(var i=0;i<n;i++){
        for(var j=0;j<2*n-1;j++){
            if(j>=a && j<=b){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        a-=1;
        b+=1;
        console.log()
    }
}

(()=>{
    console.log("hello")
})()


