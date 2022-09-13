const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');
const inputColor = document.getElementById('color')
const colorButton = document.getElementById('change-color')
const textColorBTN = document.getElementById('changeTextColor')
const inputTextColor = document.getElementById('newColor')





function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.className = 'elemento'
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.className = 'elemento'
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

function changeBackground() {
    const color = inputColor.value
    document.body.style.background = color
    localStorage.setItem('color', JSON.stringify(color));
}
function rememberColor() {
    if(localStorage.getItem('color') === null){
        localStorage.getItem('color', JSON.stringify([]))
    }
    const lastColor = JSON.parse(localStorage.getItem('color'))
    document.body.style.background = lastColor
}
const elemento = document.getElementsByClassName('elemento')
function textColor() {
    const textColor = inputTextColor.value
    for(let i = 0; i<elemento.length; i++) {
        elemento[i].style.color = textColor;
    }
    localStorage.setItem('textColor', JSON.stringify(textColor))
}
function rememberTextColor() {
    if(localStorage.getItem('textColor') === null){
        localStorage.getItem('textColor', JSON.stringify([]))
    }
    const lastTextColor = JSON.parse(localStorage.getItem('textColor'))
    for(let i = 0; i<elemento.length; i++) {
        elemento[i].style.color = lastTextColor
    }
}

textColorBTN.addEventListener('click', textColor)

colorButton.addEventListener('click', changeBackground)

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
  rememberColor();
  rememberTextColor();
};