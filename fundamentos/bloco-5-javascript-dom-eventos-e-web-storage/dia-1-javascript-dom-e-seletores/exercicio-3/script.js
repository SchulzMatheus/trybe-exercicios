        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
        4. Crie e execute uma função que corrija o texto da tag <h1>.
        5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        const ptag = document.getElementsByTagName('p');
        const square1 = document.getElementsByClassName('main-content')
        const square2 = document.getElementsByClassName('center-content')
        const h1 = document.getElementsByTagName('h1');
        const string = 'Lorem ipsum dolor  '
        function changeElementText(element, text){
            element.innerText = text
        }
        function changeElementBackgroundColor(element, color){
            element.style.background = color
        }
        function changeElementsToUpper(element, text){ 
            element.innerText = text.toLocaleUpperCase()
        }
        function listElements(element)
        {
            for(let i of element)
            {
                console.log(i.innerText)
            }
        }
        
      
        changeElementText(ptag[0], 'Lorem Ipsum' )
        changeElementText(ptag[1], string)
        changeElementBackgroundColor(square1[0], 'rgb(76,164,109)')
        changeElementBackgroundColor(square2[0], 'white')
        changeElementText(h1[0], 'JavaScript')
        changeElementsToUpper (ptag[0], 'lorem ipsum')
        changeElementsToUpper (ptag[1], string)
        changeElementsToUpper (ptag[2], 'Trybe')
        listElements(ptag)

        

