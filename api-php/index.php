<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuración de CORS y tipo de contenido
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST");
header('Content-Type: application/json');

// Credenciales de la base de datos y correo (configuración directa)
$dbHost = '127.0.0.1';
$dbName = 'a1c4lu5v_alcaldia';
$dbUser = 'a1c4lu5v_adminsimerco';
$dbPassword = 'VOsp80w0pG98b';
$dbPort = 3306;

$emailUser = 'informatica@alcaldialaunion.gob.sv';
$emailPassword = 'Admin*123';

try {
    // Conexión a la base de datos
    $dsn = "mysql:host=$dbHost;port=$dbPort;dbname=$dbName;charset=utf8mb4";
    $pdo = new PDO($dsn, $dbUser, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Error al conectar con la base de datos: " . $e->getMessage()]);
    exit;
}

// Verifica el método de la solicitud
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // Obtener todos los eventos
    if (isset($_GET['tipo'])) {
        $tipo = htmlspecialchars(trim($_GET['tipo']));
        $stmt = $pdo->prepare("SELECT * FROM eventos WHERE tipo = :tipo ORDER BY fecha DESC");
        $stmt->execute(['tipo' => $tipo]);
    } else {
        $stmt = $pdo->prepare("SELECT * FROM eventos ORDER BY fecha DESC");
        $stmt->execute();
    }

    $eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($eventos);
} elseif ($method === 'POST') {
    // Lógica para enviar el correo
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(["message" => "Datos inválidos."]);
        exit;
    }

    $nombre = htmlspecialchars(trim($input['nombre'] ?? ''));
    $email = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(trim($input['mensaje'] ?? ''));

    if (empty($nombre) || empty($email) || empty($mensaje)) {
        http_response_code(400);
        echo json_encode(["message" => "Todos los campos son requeridos."]);
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'mail.alcaldialaunion.gob.sv';
        $mail->SMTPAuth = true;
        $mail->Username = $emailUser;
        $mail->Password = $emailPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom($emailUser, 'Contacto Alcaldía');
        $mail->addAddress($emailUser);

        $mail->Subject = "Nuevo mensaje de contacto de $nombre";
        $mail->Body = "Tienes un nuevo mensaje de $nombre ($email):\n\n$mensaje";

        $mail->send();
        echo json_encode(["message" => "Correo enviado con éxito."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Error al enviar el correo: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Método no permitido."]);
}

?>
