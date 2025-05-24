// Exercícios de JavaScript: Objetos e JSON
// 1. Crie um objeto chamado `aluno` com as propriedades: `nome`, `idade` e `curso`.
let aluno = {
    nome: "Matheus",
    idade: 19,
    curso: "Engenharia de Software"
};
console.log(aluno);

// 2. Adicione uma nova propriedade chamada `matriculado` ao objeto `aluno`, com valor `true`.
aluno.matriculado = true;
console.log('adicionando campo matriculado ao aluno: ', aluno);

// 3. Altere o valor da propriedade `curso` para "Engenharia".
aluno.curso = "Engenharia";

// 4. Remova a propriedade `idade` do objeto `aluno`.
delete aluno.idade;
console.log('removendo idade do aluno: ', aluno);

// 5. Acesse o valor da propriedade `nome` do objeto `aluno` e armazene em uma variável chamada `nomeAluno`.
let nomeAluno = aluno.nome;
console.log('nome aluno apos passar de nome -> nomeAluno: ', nomeAluno);

// 6. Crie uma array chamada `alunos`, contendo 3 objetos com as propriedades: `nome` e `nota`.
let alunos = [
    {nome: "Aluno 1", nota: 10},
    {nome: "Aluno 2", nota: 7},
    {nome: "Aluno 3", nota: 0}
]
console.log('array com 3 objetos de alunos: ', alunos);

// 7. Usando `map`, crie um novo array com apenas os nomes dos alunos do array `alunos`.
let nomesAlunos = alunos.map(aluno => aluno.nome);
console.log('map apenas dos NOMES dos alunos: ', nomesAlunos);

// 8. Use `filter` para retornar os alunos com nota maior ou igual a 7.
let notasMaioresQueSete = alunos.filter(aluno => aluno.nota >= 7);
console.log('Alunos com nota maior ou igual a sete: ', notasMaioresQueSete);

// 9. Converta o objeto `aluno` para uma string JSON.
let jsonAluno = JSON.stringify(aluno);
console.log('Convertendo o objeto aluno para uma string JSON', jsonAluno);

// 10. Converta a string JSON anterior de volta para objeto.
jsonAluno = JSON.parse(jsonAluno);
console.log('Convertendo de JSOn de volta pra obj: ', jsonAluno);

// 11. Crie um objeto `livro` com as propriedades: `titulo`, `autor`, `anoPublicacao`, 
// e dentro dele, um objeto `editora` com `nome` e `cidade`.
let livro = {
    titulo: "Matéria Escura",
    autor: "Blake Crouch", // os livros dele sao muito fod@s
    anoPublicacao: 2016,
    editora: {
        nome: "Intrínseca",
        cidade: "nao sei"
    }
}
console.log('Objeto livro com objeto editora dentro: ', livro);

// 12. Acesse o nome da editora do objeto `livro`.
console.log('Acessando nome da editora dentro do obj livro: ', livro.editora.nome);

// 13. Faça uma função chamada `listarPropriedades(obj)` que receba um objeto e retorne um array com
// os nomes das propriedades.
function listarPropriedades(livroObj){
    return Object.keys(livroObj);
}
console.log('Keys do obj livro: ', listarPropriedades(livro));

// 14. Crie uma função chamada `atualizarObjeto(obj, chave, valor)` que atualize dinamicamente uma
// propriedade de um objeto.
function atualizarObjeto(livroObj, chave, valor){
    livroObj[chave] = valor;
    return livroObj;
}
let novoLivro = atualizarObjeto(livro, "titulo", "Recursão");
console.log('Nome do livro com propriedade *titulo* atualizada:', novoLivro.titulo);

// 15. Escreva uma função chamada `removerPropriedade(obj, chave)` que remova uma propriedade de
// um objeto.
function removerPropriedade(livroObj, chave){
    delete livroObj[chave];
    return livroObj;
}
novoLivro = removerPropriedade(novoLivro, "anoPublicacao");
console.log('Nome do livro com propriedade *anoPublicacao* removida:', novoLivro);

