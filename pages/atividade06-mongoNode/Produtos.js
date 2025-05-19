const { connect } = require('./database.js');

class Produto {
    constructor(idProduto, cnpjEmpresa, nomeProduto, quantidade, valor, categoria, descricao, imagens, status){
        this.idProduto = idProduto;
        this.cnpjEmpresa = cnpjEmpresa;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
        this.valor = valor;
        this.categoria = categoria;
        this.descricao = descricao;
        this.imagens = imagens;
        this.status = status;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("produto").insertOne({
                idProduto: this.idProduto,
                cnpjEmpresa: this.cnpjEmpresa,
                nomeProduto: this.nomeProduto,
                quantidade: this.quantidade,
                valor: this.valor,
                categoria: this.categoria,
                descricao: this.descricao,
                imagens: this.imagens,
                status: this.status
            });
            console.log("Produto inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir produto:", error);
        }
    }
}

module.exports = Produto;