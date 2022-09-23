const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const student_answer = (array) => {
    return array;
}
const test = (array, func) => {
    let nota = 0;
    for(let i = 0; i < array.length; i+= 1){
       if(array[i] !== func[i]) {
        if (func[i] === 'N.A') {

        } else {
            nota = nota - 0.5;
        }
       } else {
        nota+= 1;
       }
    }
    return nota;
}
console.log(test(RIGHT_ANSWERS, student_answer(STUDENT_ANSWERS)));