<?php
class TransacaoController {
    private $conn;

    public function __construct() {
        $this->conn = new mysqli("localhost", "root", "fel131145", "transacoes_financeiras");

        if ($this->conn->connect_error) {
            die("Conexão falhou: " . $this->conn->connect_error);
        }
    }

    // Fechar conexão no final do ciclo de vida do objeto
    public function __destruct() {
        $this->conn->close();
    }

    // Listar todas as transações
    public function index() {
        $sql = "SELECT * FROM transacoes";
        $result = $this->conn->query($sql);

        $transacoes = array();
        while ($row = $result->fetch_assoc()) {
            $transacoes[] = $row;
        }

        header('Content-Type: application/json');
        echo json_encode($transacoes);
    }

    // Mostrar uma única transação por ID
    public function show($id) {
        // Sanitização de entrada
        $id = $this->conn->real_escape_string($id);
        $sql = "SELECT * FROM transacoes WHERE id='$id'";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            $transacao = $result->fetch_assoc();
            header('Content-Type: application/json');
            echo json_encode($transacao);
        } else {
            header("HTTP/1.0 404 Not Found");
            echo json_encode(["message" => "Transação não encontrada"]);
        }
    }

    // Criar nova transação
    public function store($descricao, $valor, $tipo, $categoria) {
        // Sanitização de entrada
        $descricao = $this->conn->real_escape_string($descricao);
        $valor = $this->conn->real_escape_string($valor);
        $tipo = $this->conn->real_escape_string($tipo);
        $categoria = $this->conn->real_escape_string($categoria);

        $sql = "INSERT INTO transacoes (descricao, valor, tipo, categoria) VALUES ('$descricao', '$valor', '$tipo', '$categoria')";
        if ($this->conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Transação adicionada com sucesso"]);
        } else {
            header("HTTP/1.0 500 Internal Server Error");
            echo json_encode(["message" => "Erro: " . $this->conn->error]);
        }
    }

    // Atualizar uma transação
    public function update($id, $descricao, $valor, $tipo, $categoria) {
        // Sanitização de entrada
        $id = $this->conn->real_escape_string($id);
        $descricao = $this->conn->real_escape_string($descricao);
        $valor = $this->conn->real_escape_string($valor);
        $tipo = $this->conn->real_escape_string($tipo);
        $categoria = $this->conn->real_escape_string($categoria);

        $sql = "UPDATE transacoes SET descricao='$descricao', valor='$valor', tipo='$tipo', categoria='$categoria' WHERE id='$id'";
        if ($this->conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Transação atualizada com sucesso"]);
        } else {
            header("HTTP/1.0 500 Internal Server Error");
            echo json_encode(["message" => "Erro: " . $this->conn->error]);
        }
    }

    // Excluir uma transação
    public function destroy($id) {
        // Sanitização de entrada
        $id = $this->conn->real_escape_string($id);
        $sql = "DELETE FROM transacoes WHERE id='$id'";
        if ($this->conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Transação excluída com sucesso"]);
        } else {
            header("HTTP/1.0 500 Internal Server Error");
            echo json_encode(["message" => "Erro: " . $this->conn->error]);
        }
    }
}
?>
