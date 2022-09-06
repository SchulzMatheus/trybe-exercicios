const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const li = document.getElementsByTagName('li')

function addClassName(event){
    for(let i = 0; i<3  ; i++){
        li[i].className = ''
    }
    event.target.className = 'tech'
}
for(let i = 0; i<3  ; i++){
    li[i].addEventListener('click', addClassName)
}

const elementTech = document.getElementsByClassName('tech')

function textEdit(event){
    const newText = event.target.value
    const tech = elementTech[0]
    tech.innerHTML = newText
}

input.addEventListener('input', textEdit)

function newWindow(){
    window.open("https://github.com/SchulzMatheus", "_blank")
}
myWebpage.addEventListener('dblclick', newWindow)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.