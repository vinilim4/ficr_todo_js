const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const formNovaLista = document.getElementById('novaLista')
let divListas = document.getElementById('listas')

let listas = []

//Escutando o evento clique no botão Criar Lista
btnNovaLista.addEventListener('click', function () {
    cardNovaLista.style.display = 'block';
})

//Escutando o evento clique no botão Salvar
formNovaLista.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="tituloLista"]')
    if(inputTitulo.value !== '') {
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        titulo: inputTitulo.value = ''
        listas.push(novaLista)
        window.localStorage.listas = JSON.stringify(listas)
        renderList()
    }

    
})

formNovaLista.addEventListener('reset', function(event) {
    cardNovaLista.style.display = 'none'
})

// função para adicionar os itens na tela
function renderList(){
    //lendo as listas salvas no localStorage
    listas = JSON.parse(window.localStorage.listas)
    //limpando a div que recebe os cardas da lista
    divListas.innerHTML = ""
    //para cada lista no array de listas, cria um novo card na tela
    listas.map(lista => {
        //criando um titulo pro card
        let h2Tag = document.createElement('H2')
        //cria btn
        let btnAddItem = document.createElement('BUTTON')
        //adiciona o texto ao btn
        btnAddItem.innerHTML = "novo item"
        //add o titulo da lista salva no titulo no card
        h2Tag.innerHTML = lista.titulo
        //cria uma div para ser o card da lista
        let divTag = document.createElement('DIV')
        //add a classe card-lista a div  para o css
        divTag.setAttribute('class', 'card-lista')
        //add o h2 a div
        divTag.appendChild(h2Tag)
         //add a div.card-lista a div que contem todas as listas na tela
        divListas.appendChild(divTag)
        //add o btnAddItem a div
        divTag.appendChild(btnAddItem)
        //add a div.card-lista a div que contem todas as listas da tela
        divListas.appendChild(divTag)
    })
}

if (window.localStorage.listas?.length > 0) {
    renderList()
}

