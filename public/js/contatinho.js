document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const status = document.getElementById('status');

    status.innerText = '';


    if (nome === '' || email === '' || mensagem === '') {
        status.innerText = 'Por favor, preencha todos os campos obrigatórios!';
        status.style.color = 'red';
        return;
    } else if (!validateEmail(email)) {
        status.innerText = 'Por favor, insira um e-mail válido!';
        status.style.color = 'red';
        return;
    }

    const formData = new FormData(this);

    fetch('php/enviar_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        status.innerText = data.message;
        status.style.color = data.success ? 'green' : 'red';


        if (data.success) {
            this.reset();
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        status.innerText = 'Ocorreu um erro ao enviar a mensagem.';
        status.style.color = 'red';
    });
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}


document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const status = document.getElementById('status');
    status.innerText = '';

    const formData = new FormData(this);

    fetch('php/enviar_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        status.innerText = data.message;
        status.style.color = data.success ? 'green' : 'red';


        if (data.success) {
            this.reset();
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        status.innerText = 'Ocorreu um erro ao enviar a mensagem.';
        status.style.color = 'red';
    });
});



function copiarTexto(id) {
    const campo = document.getElementById(id);
    const texto = campo.value.trim(); 

    if (texto) { 
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado: " + texto);
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
            alert("Falha ao copiar o texto");
        });
    } else {
        alert("O campo está vazio e não pode ser copiado.");
    }
}



document.getElementById("menuToggle").onclick = function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
};



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