

// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const result = reverseString("people");
console.log(result);


//program to reverse a array

function reversearray(arr){
    var arr1 =[]

    for(let i=arr.length -1 ; i>=0 ; i--){
        arr1.push(arr[i])
    }
    return arr1
}

const reversedarray = reversearray([1,4,5,7,9])
console.log(reversedarray)