let h1 = document.createElement('h1')
let main = document.createElement('main')
let section = document.createElement('section')
let section2 = document.createElement('section')
let section3 = document.createElement('section')
let p = document.createElement('p')
let img = document.createElement('img')
let ul = document.createElement('ul')
let arrayOfString = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
document.body.appendChild(h1)
document.body.appendChild(main)
document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.2 - JavaScript DOM'
document.getElementsByTagName('h1')[0].style.textAlign = 'center'
document.getElementsByTagName('main')[0].className = 'main-content'
document.getElementsByClassName('main-content')[0].appendChild(section)
document.getElementsByClassName('main-content')[0].firstChild.className = 'center-content'
document.getElementsByClassName('center-content')[0].appendChild(p);
document.getElementsByClassName('center-content')[0].firstChild.innerHTML = 'Lorem Ipsum'
document.getElementsByClassName('center-content')[0].firstChild.style.textAlign = 'center'
document.getElementsByClassName('main-content')[0].appendChild(section2)
document.getElementsByClassName('main-content')[0].lastChild.className = 'left-content'
document.getElementsByClassName('main-content')[0].appendChild(section3)
document.getElementsByClassName('main-content')[0].lastChild.className = 'right-content'
document.getElementsByClassName('left-content')[0].appendChild(img)
document.getElementsByClassName('left-content')[0].firstChild.src = 'https://picsum.photos/200'
document.getElementsByClassName('left-content')[0].firstChild.className = 'small-image'
document.getElementsByClassName('right-content')[0].appendChild(ul)
document.getElementsByClassName('right-content')[0].firstChild.id = 'ul'
for(let i = 0; i<arrayOfString.length; i++){
    const li = document.createElement('li')
    document.getElementById('ul').appendChild(li)
    document.getElementById('ul').lastChild.innerHTML = arrayOfString[i]
}
for(let i = 0; i<3; i++){
    const h3 = document.createElement('h3')
    document.getElementsByClassName('main-content')[0].appendChild(h3)
    document.getElementsByClassName('main-content')[0].lastChild.className = 'description'
}
document.getElementsByTagName('h1')[0].className = 'title'
const sec = document.getElementsByClassName('main-content')[0]
sec.removeChild(sec.firstChild.nextSibling)
document.getElementsByClassName('right-content')[0].id = 'right-content'
document.getElementById('right-content').style.marginRight = 'auto'
let pai = document.getElementsByClassName('center-content')[0].parentElement
pai.style.backgroundColor = 'green'
list = document.getElementById('ul')
for(let i = 0; i<2; i++){
    ul.removeChild(document.getElementById('ul').lastChild)
}










