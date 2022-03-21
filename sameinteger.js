// to check weather the last digit of number is same

function sameint(a,b,c){
  
    if(a>0,b>0,c>0){
        return a%10 == b%10 && b%10 == c%10 && c%10 == a%10
    }
    else{
        return false
    }
}

const result = sameint(45,75,345);
if(result){
    console.log("numbers have same last digit");
}
else{
    console.log("numbers don't have same digit")
}
// console.log(result)