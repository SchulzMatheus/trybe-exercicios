let arrayofnumbers = [];

let x;
let c = [];

for(let i = 0; i<25; i++){

    arrayofnumbers.push(i+1);
}

for(let i = 0; i<arrayofnumbers.length; i++)
{
    x = arrayofnumbers[i]/2
    c.push(x);
}
console.log(c)