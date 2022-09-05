let h1 = document.createElement('h1')
let main = document.createElement('main')
let section = document.createElement('section')
let p = document.createElement('p')
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






