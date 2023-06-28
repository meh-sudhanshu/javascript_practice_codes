 var n = 7
 for(var i = 0;i<n;i++){
    for(var j=0;j<n;j++){
        if(j<=i){
            process.stdout.write("*")
        }
    }
    console.log()
 }
