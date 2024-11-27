
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath || (link.getAttribute('href') === 'sobre_nos.php' && currentPath === '/')) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links que apontam para IDs dentro da página
    const linksInternos = document.querySelectorAll('.link');

    // Adiciona o evento de clique em cada link
    linksInternos.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Pega o ID da seção que o link aponta
            const idDestino = this.getAttribute('href');
            const elementoDestino = document.querySelector(idDestino);

            // Faz o scroll suave para a seção correspondente
            window.scrollTo({
                top: elementoDestino.offsetTop, // Calcula a posição da seção
                behavior: 'smooth' // Define o comportamento suave do scroll
            });
        });
    });
});



document.getElementById('relatoForm').addEventListener('submit', function (e) {
    const relato = document.getElementById('relato').value;

    // Lista de palavras bloqueadas
    const blockedWords = ['palavrão1', 'palavrão2']; // Adicione mais palavras inapropriadas
    let hasBlockedWord = false;

    blockedWords.forEach(word => {
        if (relato.includes(word)) {
            hasBlockedWord = true;
        }
    });

    if (hasBlockedWord) {
        alert('Por favor, evite palavras inadequadas em seu relato.');
        e.preventDefault();
    }
});



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