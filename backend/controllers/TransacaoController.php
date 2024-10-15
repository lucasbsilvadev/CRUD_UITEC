<?php
require_once './config/database.php';

class TransacaoController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Método para listar todas as transações
    public function index() {
        $stmt = $this->pdo->prepare("SELECT * FROM transacoes");
        $stmt->execute();
        $transacoes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($transacoes);
    }

    // Método para exibir uma transação específica
    public function show($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM transacoes WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $transacao = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($transacao);
    }

    // Método para criar uma nova transação
    public function store($descricao, $valor, $tipo, $categoria) {
        $stmt = $this->pdo->prepare("INSERT INTO transacoes (descricao, valor, tipo, categoria) VALUES (:descricao, :valor, :tipo, :categoria)");
        $stmt->bindParam(':descricao', $descricao);
        $stmt->bindParam(':valor', $valor);
        $stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':categoria', $categoria);
        
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Transação criada com sucesso.' ]);
        } else {
            echo json_encode(['message' => 'Erro ao criar transação.']);
        }
    }

    // Método para atualizar uma transação existente
    public function update($id, $descricao, $valor, $tipo, $categoria) {
        $stmt = $this->pdo->prepare("UPDATE transacoes SET descricao = :descricao, valor = :valor, tipo = :tipo, categoria = :categoria WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':descricao', $descricao);
        $stmt->bindParam(':valor', $valor);
        $stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':categoria', $categoria);
        
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Transação atualizada com sucesso.']);
        } else {
            echo json_encode(['message' => 'Erro ao atualizar transação.']);
        }
    }

    // Método para deletar uma transação
    public function destroy($id) {
        $stmt = $this->pdo->prepare("DELETE FROM transacoes WHERE id = :id");
        $stmt->bindParam(':id', $id);
        
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Transação deletada com sucesso.']);
        } else {
            echo json_encode(['message' => 'Erro ao deletar transação.']);
        }
    }
}
?>
