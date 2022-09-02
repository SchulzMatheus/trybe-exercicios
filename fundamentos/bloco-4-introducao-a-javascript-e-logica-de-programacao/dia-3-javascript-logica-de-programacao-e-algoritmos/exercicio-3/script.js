let array = ['java', 'javascript', 'python', 'htmla', 'css'];

let lowestWord = array[0]
for(let i = 0; i< array.length; i++)
    {
        if (array[i].length < lowestWord.length)
        lowestWord = array[i]
    }
 console.log(lowestWord)