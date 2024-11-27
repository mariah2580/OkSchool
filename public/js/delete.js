const explanations = [
    { text: 'Bem-vindo à nossa plataforma de cursos!', element: document.querySelector('.educacao-inclusiva') },
    { text: 'Aqui você pode ver os cursos disponíveis.', element: document.querySelector('.course-container') },
    { text: 'Clique em "Inscreva-se" para participar de um curso.', element: document.querySelectorAll('.btn-inscrever')[0] },
    { text: 'Você pode ver mais cursos clicando em "Ver Mais".', element: document.querySelector('.btn-ver-mais') },
    { text: 'Aqui no rodapé você encontra links importantes e redes sociais.', element: document.querySelector('footer') },
    { text: 'Consegui te ajudar?', element: null } // Última pergunta
];

let step = 0;

document.addEventListener("DOMContentLoaded", function () {
    const assistant = document.getElementById('assistant');
    const balloon = document.getElementById('balloon');
    const nextBtn = document.getElementById('next-btn');
    const helpOptions = document.getElementById('help-options');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const balloonText = document.getElementById('balloon-text');

    // Mostrar o balão de fala ao clicar no assistente
    assistant.addEventListener('click', function () {
        balloon.style.display = 'block';
        showExplanation();
    });

    // Trocar o texto ao clicar em 'Próximo'
    nextBtn.addEventListener('click', function () {
        step++;
        showExplanation();
    });

    // Se o usuário precisar de mais ajuda, redirecionar para a página de contato
    noBtn.addEventListener('click', function () {
        window.location.href = '../contato.html';
    });

    // Se o usuário não precisar de ajuda, esconder o balão e resetar o assistente
    yesBtn.addEventListener('click', function () {
        balloon.style.display = 'none';
        nextBtn.style.display = 'block';
        helpOptions.style.display = 'none';
        step = 0; // Reseta a explicação
    });
});

// Função para exibir o balão com a explicação atual
function showExplanation() {
    const balloonText = document.getElementById('balloon-text');
    const nextBtn = document.getElementById('next-btn');
    const helpOptions = document.getElementById('help-options');

    if (step < explanations.length) {
        balloonText.textContent = explanations[step].text;
        
        // Se há um elemento associado à explicação, rolar até ele
        if (explanations[step].element) {
            explanations[step].element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Mostra o botão de "Próximo" ou as opções "Sim/Não"
        if (step === explanations.length - 1) {
            nextBtn.style.display = 'none'; // Esconde o botão "Próximo"
            helpOptions.style.display = 'block'; // Mostra os botões "Sim/Não"
        } else {
            nextBtn.style.display = 'block'; // Mostra o botão "Próximo"
            helpOptions.style.display = 'none'; // Esconde as opções "Sim/Não"
        }
    }
}

// Função para inicializar as opções de ajuda (Sim/Não)
function showHelpOptions() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', function() {
        document.getElementById('balloon').style.display = 'none';
        document.getElementById('assistant').style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        window.location.href = '../contato.html'; // Leva à página de ajuda
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const assistant = document.getElementById('assistant');
    const balloon = document.getElementById('balloon');
    const nextBtn = document.getElementById('next-btn');
    const helpOptions = document.getElementById('help-options');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const balloonText = document.getElementById('balloon-text');

    let step = 0;

    const stepsText = [
        "Bem-vindo! Vou te guiar pela página.",
        "Aqui você encontra informações sobre nossos cursos.",
        "Clique nos botões para se inscrever em nossos cursos.",
        "Consegui tirar sua dúvida?"
    ];

    // Mostrar o balão de fala ao clicar no assistente
    assistant.addEventListener('click', function () {
        balloon.style.display = 'block';
        balloonText.textContent = stepsText[step];
    });

    // Trocar o texto ao clicar em 'Próximo'
    nextBtn.addEventListener('click', function () {
        step++;
        if (step < stepsText.length - 1) {
            balloonText.textContent = stepsText[step];
        } else {
            nextBtn.style.display = 'none';
            balloonText.textContent = stepsText[step];
            helpOptions.style.display = 'block';
        }
    });

    // Se o usuário precisar de mais ajuda, redirecionar para a página de ajuda
    noBtn.addEventListener('click', function () {
        window.location.href = '../contato.html';
    });

    // Se o usuário não precisar de ajuda, esconder o balão
    yesBtn.addEventListener('click', function () {
        balloon.style.display = 'none';
        nextBtn.style.display = 'block';
        helpOptions.style.display = 'none';
        step = 0; // Reseta a explicação
    });
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