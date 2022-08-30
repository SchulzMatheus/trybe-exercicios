let word = 'raven';
let a = word.split("")
let b = [];


for(let i = a.length-1; i >= 0; i--){
    b.push(a[i])
}
console.log(b);
let c;
c = b.join("")
console.log(c);