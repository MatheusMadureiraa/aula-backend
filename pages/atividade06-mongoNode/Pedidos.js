const { connect } = require("./database");

class Pedido {
    constructor(idPedido, cpfCliente, frete, valorTotal, formaPagamento, dataPedido, dataEntrega, itens, endereco, status) {
        this.idPedido = idPedido;
        this.cpfCliente = cpfCliente;
        this.frete = frete;
        this.valorTotal = valorTotal;
        this.formaPagamento = formaPagamento;
        this.dataPedido = dataPedido;
        this.dataEntrega = dataEntrega;
        this.itens = itens;
        this.endereco = endereco;
        this.status = status;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("pedido").insertOne({
                idPedido: this.idPedido,
                cpfCliente: this.cpfCliente,
                frete: this.frete,
                valorTotal: this.valorTotal,
                formaPagamento: this.formaPagamento,
                dataPedido: this.dataPedido,
                dataEntrega: this.dataEntrega,
                itens: this.itens,
                endereco: this.endereco,
                status: this.status
            });
            console.log("Pedido inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir pedido:", error);
        }
    }
}

module.exports = Pedido;