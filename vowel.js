//count the number of vowels in sentence

function countvowels(sentence){
    var count = 0
    var vowels = ["a","i","e","o","u"]
    
    for(let char of sentence){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
return count
}

const result = countvowels("hello world");
console.log(result)