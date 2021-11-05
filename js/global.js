const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')

btnNovaLista.addEventListener('click', function() {
    cardNovaLista.style.display = 'block';
})
cancelar.addEventListener('click', function() {
    cardNovaLista.style.display = 'none';
})