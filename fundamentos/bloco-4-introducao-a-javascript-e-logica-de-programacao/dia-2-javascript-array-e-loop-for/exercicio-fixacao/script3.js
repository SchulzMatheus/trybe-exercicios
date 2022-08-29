let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;
for(let sum = 0; sum < numbers.length; sum++)
{
    count = count+numbers[sum]
}
let md;
md = count/(numbers.length-1)
console.log(md);
