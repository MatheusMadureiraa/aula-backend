const Empresa = require("./Empresas.js");

let counter = 0;
async function testarInsercao() {
    const empresa = new Empresa(`${counter}`, '00100200304', '20', '199', 'pix', '2025-01-20', '2025-01-28', 'teste', 'rua teste', 'entregue');
    await empresa.inserir();
    counter++;
}

testarInsercao();