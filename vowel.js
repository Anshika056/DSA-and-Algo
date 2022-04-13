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

//
function vowelsAndConsonants(s) {
    const vowels = ["a","e","i","o","u"]
    
    for(let i = 0;i<s.length;i++){
        if(vowels.indexOf(s[i]) > -1){
            console.log(s[i])
        }
    }
    
    for(let j =0;j<s.length;j++){
        if(vowels.indexOf(s[j])==-1){
            console.log(s[j])
        }
    }
}

vowelsAndConsonants("hello")
 