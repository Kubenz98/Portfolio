<?php

use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST["name"]) && isset($_POST['email']) && isset($_POST['body']) && isset($_POST['body'])){
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$subject = htmlspecialchars($_POST["subject"]);
$message = htmlspecialchars($_POST["body"]);

require "vendor/autoload.php";


$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = $_SERVER['HTTPS_PHP_MAILER_HOST'];
$mail->Username = $_SERVER['HTTPS_PHP_MAILER_USERNAME'];
$mail->Password = $_SERVER['HTTPS_PHP_MAILER_PASSWORD'];
$mail->Port = $_SERVER['HTTPS_PHP_MAILER_PORT'];
$mail->SMTPSecure = "ssl";
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->setFrom("kontakt@jakubkoluda.pl", $name);
$mail->addAddress("kontakt@jakubkoluda.pl", "Jakub");

$mail->Subject = $subject;
$mail->Body =  <<<EOT
Email: $email

Name: $name

Message: $message
EOT;

if($mail->send()) {
    $status = "success";
    $response = "Email is sent!";
} else {
    $status = "failed";
    $response = "Something is wrong: <br>" . $mail->ErrorInfo;
}

exit(json_encode(array("status" => $status, "response" => $response)));
}

