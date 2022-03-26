
function misnum(arr){
    var arr
    var missing =[]
    var count =10
    
    for(let i=1;i<=count;i++){
        if(arr.indexOf(i) == -1){
            missing.push(i)
        }
    }
    return missing
}

console.log(misnum([1,2,3,4,5,8,9]));