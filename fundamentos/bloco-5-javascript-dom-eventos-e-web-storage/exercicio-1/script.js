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
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
elementoOndeVoceEsta.appendChild(section)
document.getElementById('elementoOndeVoceEsta').lastElementChild.id = 'lastElementoOndeVoceEstaChild'
let pFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
pFilhoDoFilho.appendChild(section)
document.getElementById('primeiroFilhoDoFilho').lastElementChild.id = 'lastpFilhoDoFilhoChild'
console.log(document.getElementById('lastpFilhoDoFilhoChild').parentElement.parentElement.nextElementSibling)
let controller = pai.children.length
for (let i = 0; i<controller;  i++){
  if (pai.children.id != 'elementoOndeVoceEsta'){
        if(pai.firstChild.id !='elementoOndeVoceEsta'){
            pai.removeChild(document.getElementById('pai').firstChild)
        }
        pai.removeChild(document.getElementById('pai').lastChild)
    }
}
let controller2 = elementoOndeVoceEsta.children.length

for (let i = 0; i<controller2; i++)
{
    if(elementoOndeVoceEsta.children.id != 'primeiroFilhoDoFilho'){
        if(elementoOndeVoceEsta.firstChild.id != 'primeiroFilhoDoFilho'){
            elementoOndeVoceEsta.removeChild(document.getElementById('elementoOndeVoceEsta').firstChild)
        }
        elementoOndeVoceEsta.removeChild(document.getElementById('elementoOndeVoceEsta').lastChild)
    }
}






