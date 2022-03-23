//Print 'fizz' for multiples for 3.
// Print 'buzz' for multiples of 5. Lastly, print 'fizzbuzz' for multiples of 3 and 5.

function fizzbuzz(){
    for (let i=0; i<=100 ; i++){
        if(i % 3 === 0 && i % 5 === 0){
          console.log("fizzbuzz")
        }
        else if(i % 3 === 0){
            console.log("fizz");
        }
        else if(i % 5 === 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}

fizzbuzz();



