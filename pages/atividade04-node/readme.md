# Atividade Servidor Web Node.js
Este projeto implementa um servidor web básico em Node.js que atende páginas HTML em português e inglês, além de exibir uma lista dos primeiros 5 usuários de um arquivo texto.

## Funcionalidades
- Disponibiliza páginas HTML estáticas (`pt.html` e `en.html`) armazenadas na mesma pasta do servidor.
- Permite alternar entre páginas em português (`/` ou `/pt`) e inglês (`/en`) via URL.
- Carrega arquivo CSS externo (`style.css`) para estilização das páginas.
- Exibe uma página dinâmica `/users` com os primeiros 5 usuários listados no arquivo `users.txt`.
- A classe `Usuarios` no módulo `usuarios.js` é responsável por ler e retornar os usuários do arquivo.

