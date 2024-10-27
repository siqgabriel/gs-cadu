// Script-paraIndex.js

// Função para exibir uma mensagem de boas-vindas quando a página é carregada
window.onload = function() {
    alert('Bem-vindo à Equipe IT INNOVATION!');
};

// Função para validar o formulário de contato
function validarFormulario() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('subject').value;
    var mensagem = document.getElementById('message').value;

    if(nome === '' || email === '' || assunto === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return false;
    }
    return true;
}

// Adiciona um ouvinte de evento ao formulário para validar antes do envio
document.querySelector('form').addEventListener('submit', function(event) {
    if(!validarFormulario()) {
        event.preventDefault();
    }
});

// Função para mudar o texto do botão principal quando passar o mouse
document.querySelector('.botao_principal').addEventListener('mouseover', function() {
    this.textContent = 'Participe da Reciclagem!';
});

document.querySelector('.botao_principal').addEventListener('mouseout', function() {
    this.textContent = 'Recicle';
});
