<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Verifica que el método sea POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decodifica el cuerpo de la solicitud JSON
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(["message" => "Datos inválidos."]);
        exit;
    }

    $nombre = $input['nombre'] ?? '';
    $email = $input['email'] ?? '';
    $mensaje = $input['mensaje'] ?? '';

    if (empty($nombre) || empty($email) || empty($mensaje)) {
        http_response_code(400);
        echo json_encode(["message" => "Todos los campos son requeridos."]);
        exit;
    }

    // Configuración de PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'mail.alcaldialaunion.gob.sv';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('EMAIL_USER'); // Define EMAIL_USER en tu entorno
        $mail->Password = getenv('EMAIL_PASS'); // Define EMAIL_PASS en tu entorno
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Configuración del correo
        $mail->setFrom(getenv('EMAIL_USER'), 'Contacto Alcaldía');
        $mail->addAddress(getenv('EMAIL_USER')); // Correo receptor

        $mail->Subject = "Nuevo mensaje de contacto de $nombre";
        $mail->Body = "Tienes un nuevo mensaje de $nombre ($email):\n\n$mensaje";

        // Enviar el correo
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
