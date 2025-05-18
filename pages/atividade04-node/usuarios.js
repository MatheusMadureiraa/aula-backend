const fs = require('fs');

class Usuarios {
    constructor(caminhoArquivo) {
        this.caminhoArquivo = caminhoArquivo;
    }

    getTopUsuarios() {
        const dados = fs.readFileSync(this.caminhoArquivo, 'utf8');
        const usuarios = dados.split('\n').map(u => u.trim()).filter(u => u.length > 0);
        return usuarios.slice(0, 5);
    }
}

module.exports = Usuarios;
