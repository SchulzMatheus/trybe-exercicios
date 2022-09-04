const body = document.body
const urgente = document.getElementsByTagName('section')
const h3 = document.getElementsByTagName('h3')
const div = document.getElementsByTagName('div')
document.getElementsByTagName('h1')[0].style.color = 'black'
document.getElementsByTagName('footer')[0].style.color = 'green'

body.style.background = '#d9aefc';
for(let i = 0; i<2; i++){
    h3[i].style.background = '#85a5fc'
}
for(let i = 2; i<4; i++){
    h3[i].style.background = '#61d0d8'
   
}
for(let i = 0; i<h3.length; i++)
{
    h3[i].style.color = 'black'
}
for(let i = 0; i<urgente.length; i++)
{
    urgente[i].style.background = '#ccf3ff'
}
