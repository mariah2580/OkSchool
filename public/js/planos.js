function adquirirPlano() {
    alert("Entre em contato conosco na página de contato."); // Exibe a mensagem
    window.location.href = "http://localhost/OkSchool%20organizado/contato.html"; // Caminho absoluto
}


// Seleciona os elementos do popup
const popup = document.getElementById('popup');
const fecharPopup = document.getElementById('fecharPopup');

// Função para abrir o popup
function abrirPopup() {
    popup.style.display = 'flex'; // Mostra o popup
}

// Evento para fechar o popup ao clicar no "X"
fecharPopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Esconde o popup
});

// Fecha o popup clicando fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});