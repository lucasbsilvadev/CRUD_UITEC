<?php
$host = 'localhost';
$dbname = 'transacoes_financeiras';
$username = 'root';
$password = 'fel131145';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erro de conexão: ' . $e->getMessage();
    exit();
}
?>
