const { connect } = require("./database");

class Cliente {
    constructor(cpf, nomeCliente, email, senha, telefone, enderecos, dataCadastro, cartoes, pontuacao) {
        this.cpf = cpf;
        this.nomeCliente = nomeCliente;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.enderecos = enderecos;
        this.dataCadastro = dataCadastro;
        this.cartoes = cartoes;
        this.pontuacao = pontuacao;
    }
    
    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("cliente").insertOne({
                cpf: this.cpf,
                nomeCliente: this.nomeCliente,
                email: this.email,
                senha: this.senha,
                telefone: this.telefone,
                enderecos: this.enderecos,
                dataCadastro: this.dataCadastro,
                cartoes: this.cartoes,
                pontuacao: this.pontuacao
            });
            console.log("Cliente inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir cliente:", error);
        }
    }
}

module.exports = Cliente;