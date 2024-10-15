<?php
// Headers CORS
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

require_once './config/database.php'; // Inclui a configuração do banco de dados
require_once './controllers/TransacaoController.php';

$controller = new TransacaoController($pdo); // Passa a conexão PDO para o controlador
$request_method = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"), true); // Captura o corpo da requisição

switch ($request_method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $controller->show($id);
        } else {
            $controller->index();
        }
        break;

    case 'POST':
        if (!empty($data['descricao']) && !empty($data['valor']) && !empty($data['tipo']) && !empty($data['categoria'])) {
            $controller->store($data['descricao'], $data['valor'], $data['tipo'], $data['categoria']);
        } else {
            header("HTTP/1.0 400 Bad Request");
            echo json_encode(['message' => 'Dados incompletos para criar transação.']);
        }
        break;

    case 'PUT':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            if (!empty($data['descricao']) && !empty($data['valor']) && !empty($data['tipo']) && !empty($data['categoria'])) {
                $controller->update($id, $data['descricao'], $data['valor'], $data['tipo'], $data['categoria']);
            } else {
                header("HTTP/1.0 400 Bad Request");
                echo json_encode(['message' => 'Dados incompletos para atualizar transação.']);
            }
        } else {
            header("HTTP/1.0 400 Bad Request");
            echo json_encode(['message' => 'ID não fornecido para atualização.']);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $controller->destroy($id);
        } else {
            header("HTTP/1.0 400 Bad Request");
            echo json_encode(['message' => 'ID não fornecido para exclusão.']);
        }
        break;

    default:
        header("HTTP/1.0 405 Method Not Allowed");
        echo json_encode(['message' => 'Método não permitido']);
        break;
}
?>
