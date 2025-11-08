<?php
session_start(); // Inicia a sessão para rastrear visitantes únicos
error_reporting(0); // Desativa a exibição de avisos que podem quebrar o JSON
 
$dataFile = 'visitors.json';
$initialCount = 300;
 
// Garante que o arquivo exista com o valor inicial
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode(['count' => $initialCount]));
}
 
// Lê o valor atual do arquivo
$content = file_get_contents($dataFile);
$data = json_decode($content, true);
 
// Se o JSON for inválido ou não tiver a chave 'count', reinicia com o valor inicial
if (json_last_error() !== JSON_ERROR_NONE || !isset($data['count'])) {
    $data = ['count' => $initialCount];
}
 
// Incrementa o contador apenas se o visitante ainda não foi contado nesta sessão
if (!isset($_SESSION['visitor_counted'])) {
    // Abre o arquivo para escrita com bloqueio exclusivo
    $fp = fopen($dataFile, 'r+');
    if (flock($fp, LOCK_EX)) {
        // Re-lê os dados dentro do lock para garantir que temos o valor mais recente
        $size = filesize($dataFile);
        $content = $size > 0 ? fread($fp, $size) : '';
        $currentData = json_decode($content, true);
        
        $currentData['count']++;
        
        // Escreve o novo valor
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($currentData));
        fflush($fp);
        flock($fp, LOCK_UN); // Libera o bloqueio
        
        $data['count'] = $currentData['count']; // Atualiza a variável local
        $_SESSION['visitor_counted'] = true; // Marca a sessão como contada
    }
    fclose($fp);
}
 
// Retorna os dados em formato JSON para o JavaScript
header('Content-Type: application/json');
echo json_encode($data);
?>
