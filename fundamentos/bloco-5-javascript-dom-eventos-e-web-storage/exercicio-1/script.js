// arquivo script.js
console.log(document.getElementById('elementoOndeVoceEsta'))
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'blue'
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Pão'
console.log(document.getElementById('pai').firstElementChild)
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling)
console.log(document.getElementById('pai').lastElementChild.previousElementSibling)
let section = document.createElement('section')
let pai = document.getElementById('pai')
pai.appendChild(section)
document.getElementById('pai').lastChild.id = 'elementoOndeVoceEstaBrother'
let newElement = document.createElement('section')
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
elementoOndeVoceEsta.appendChild(newElement)
document.getElementById('elementoOndeVoceEsta').lastElementChild.id = 'lastElementoOndeVoceEstaChild'
let pFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
pFilhoDoFilho.appendChild(newElement)
document.getElementById('primeiroFilhoDoFilho').lastElementChild.id = 'lastpFilhoDoFilhoChild'
console.log(document.getElementById('lastpFilhoDoFilhoChild').parentElement.parentElement.nextElementSibling)



