const { connect } = require('./database.js');

class Empresa {
    constructor(cnpj, nomeEmpresa, email, senha, telefone, dataCadastro, valorVendido, numVendas, numClientes, avaliacaoEstrelas) {
        this.cnpj = cnpj;
        this.nomeEmpresa = nomeEmpresa;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.dataCadastro = dataCadastro;
        this.valorVendido = valorVendido;
        this.numVendas = numVendas;
        this.numClientes = numClientes;
        this.avaliacaoEstrelas = avaliacaoEstrelas;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("empresa").insertOne({
                cnpj: this.cnpj,
                nomeEmpresa: this.nomeEmpresa,
                email: this.email,
                senha: this.senha,
                telefone: this.telefone,
                dataCadastro: this.dataCadastro,
                valorVendido: this.valorVendido,
                numVendas: this.numVendas,
                numClientes: this.numClientes,
                avaliacaoEstrelas: this.avaliacaoEstrelas
            });
            console.log("Empresa inserida:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir empresa:", error);
        }
    }
}

module.exports = Empresa;