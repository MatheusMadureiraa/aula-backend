import { renderizarCards, filtrarCards } from './components/card.js';

document.addEventListener("DOMContentLoaded", function () {
    renderizarCards();

    const formSelect = document.getElementById("form-select");

    formSelect.addEventListener("change", ()=> {
        const filtroSelecionado = formSelect.value;
        filtrarCards(filtroSelecionado);
    });
});