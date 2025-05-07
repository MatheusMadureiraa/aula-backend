/*
estrutrura final dos cards no html (exemplo do card 1):

<div class="card">
    <div class="header-card">
        <img src="./assets-home/logos/html-logo.svg" class="card-img-top" alt="html-logo">
        <img src="./assets-home/logos/css-logo.svg" class="card-img-top" alt="html-logo">
    </div>

    <div class="card-body">
        <h3 class="card-title">Atividade 01</h3>
        <span>Revisão front-end:</span>
        <p class="card-text">Atividade criando um formulário básico utilizando HTML e CSS.</p>
        <div class="link-card-container">
            <a href="" class="link-card">GitHub</a>
            <a href="./pages/atividade01-forms/index.html" class="link-card">Ver Página</a>
        </div>
    </div>
</div>
*/

let todosCards = []; // inicia com nenhum card

export function filtrarCards (valorFiltro) {
    switch (valorFiltro) {
        case "Todos":
            mostrarCards(todosCards);
            break;
        case "html-css":
            mostrarCards(todosCards.filter(card => card.logos.includes("html-logo.svg") || card.logos.includes("css-logo.svg")));
            break;
        case "js":
            mostrarCards(todosCards.filter(card => card.logos.includes("js-logo.svg")));
            break;
        case "bootstrap":
            mostrarCards(todosCards.filter(card => card.logos.includes("bootstrap-logo.svg")));
            break;
        case "node":
            mostrarCards(todosCards.filter(card => card.logos.includes("node-logo.svg")));
            break;
        case "mongo":
            mostrarCards(todosCards.filter(card => card.logos.includes("mongodb-logo.svg")));
            break;
        default:
            mostrarCards(todosCards.filter(card => card.logos.includes(valorFiltro)));
            break;
    }
}

export function renderizarCards () {
    fetch('./data/cards.json') // importando json
    .then(response => response.json())
    .then(data => {
        todosCards = data;
        mostrarCards(todosCards);
    })
    .catch(error => console.error('Erro ao renderizar o json dos cards: ', error));
}

export function mostrarCards (cards) {
    const cardsContainer = document.getElementById("card-container");

    if(cards.length === 0) {
        cardsContainer.innerHTML = "<p class='aviso'>Nenhuma atividade com essa stack foi realizada.</p>";
        return
    }

    cardsContainer.innerHTML = "";

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";

        const header = document.createElement("div");
        header.className = "header-card";

        card.logos.forEach(logo => {
            const imagem = document.createElement("img");
            imagem.src = `./assets-home/logos/${logo}`;
            imagem.alt = logo;
            imagem.className = "card-img-top";
            header.appendChild(imagem);
        });

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = card.titulo;

        const topico = document.createElement("span");
        topico.textContent = card.topico;

        const descricao = document.createElement("p");
        descricao.className = "card-text";
        descricao.textContent = card.descricao;

        const linksContainer = document.createElement("div");
        linksContainer.className = "link-card-container";

        card.links.forEach(link => {
            const linkElement = document.createElement("a");
            linkElement.href = link.href;
            linkElement.textContent = link.label;
            linkElement.className = "link-card";
            linksContainer.appendChild(linkElement);
        });

        body.appendChild(title);
        body.appendChild(topico);
        body.appendChild(descricao);
        body.appendChild(linksContainer);

        cardElement.appendChild(header);
        cardElement.appendChild(body);

        cardsContainer.appendChild(cardElement);
    });
};

