let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x;
let a = [];

for (let i = 0; i<numbers.length; i++){
    
        if(i<numbers.length-1){
            x = numbers[i]*numbers[i+1]
            a.push(x)      
    }
        else if(i=numbers.length){
        x = numbers[i-1]*2
        a.push(x);
    }

}
console.log(a) 