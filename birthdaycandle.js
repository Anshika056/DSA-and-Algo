//count the maximum number of candles

function candle(){
    var arr=[3,2,1,3]
    let max = arr[0]
        var count = 0
    for(i=0;i<arr.length;i++) {    //get the max
        if(arr[i]>max){
            max = arr[i]
        }  
    }
    console.log(max)
    for(i=0;i<arr.length;i++){     //count the number of maximum number
        if(arr[i]==max){
            count ++
        }
    }
        return count
    
}
const candles = candle()
console.log(candles)