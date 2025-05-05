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

document.addEventListener("DOMContentLoaded", function () {

    fetch('./data/cards.json') // importando json
        .then(response => response.json())
        .then(data => {

            const cardsContainer = document.getElementById("card-container");

            data.forEach(card => { // cria as divs necessarias para cada card
                const cardElement = document.createElement("div");
                cardElement.className = "card";
                
                const header = document.createElement("div");
                header.className = "header-card";

                // add logos no topo do card
                card.logos.forEach(logo => {
                    const imagem = document.createElement("img");
                    imagem.src = `./assets-home/logos/${logo}`;
                    imagem.alt = logo
                    imagem.className = "card-img-top";
                    header.appendChild(imagem);
                })

                // criando div do body e elementos dentro dela
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

                // criando div e adicionando links
                const linksContainer = document.createElement("div");
                linksContainer.className = "link-card-container";

                card.links.forEach(link => {
                    const linkElement = document.createElement("a");
                    linkElement.href = link.href;
                    linkElement.textContent = link.label;
                    linkElement.className = "link-card";
                    linksContainer.appendChild(linkElement);
                });

                // juntando tudo, um abaixo do outro
                body.appendChild(title);
                body.appendChild(topico);
                body.appendChild(descricao);
                body.appendChild(linksContainer);

                cardElement.appendChild(header);
                cardElement.appendChild(body);

                // adicionando o card na div principal (card-container)
                cardsContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Erro ao carregar o json dos cards: ', error));
});
