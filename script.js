const botao = document.getElementById('botao');

const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    mensagem.textContent=('Seja bem vindo');
    mensagem.classList.add('mensagem')
});