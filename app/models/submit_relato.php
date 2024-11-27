<?php
// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "relatos_db";

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos foram enviados
    if (isset($_POST['nome'], $_POST['idade'], $_POST['relato'])) {
        // Recebe e sanitiza os dados do formulário
        $nome = htmlspecialchars($_POST['nome'], ENT_QUOTES, 'UTF-8');
        $idade = intval($_POST['idade']); // Isso já é seguro
        $relato = htmlspecialchars($_POST['relato'], ENT_QUOTES, 'UTF-8');

        // Verifica se os campos não estão vazios
        if ($nome && $idade && $relato) {
            // Usando prepared statements para prevenir SQL injection
            $stmt = $conn->prepare("INSERT INTO relatos (nome, idade, relato) VALUES (?, ?, ?)");
            $stmt->bind_param("sis", $nome, $idade, $relato); // "sis" indica tipos: string, integer, string

            if ($stmt->execute()) {
                // Redireciona para a página inicial ou para uma página de confirmação
                header("Location: http://localhost/OkSchool%20organizado/sobre_nos.php");
                exit();
            } else {
                echo "Erro: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Dados inválidos!";
        }
    } else {
        echo "Dados não enviados!";
    }
} else {
    echo "Acesso não autorizado!";
}

$conn->close();
?>
