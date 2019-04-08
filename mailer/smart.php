<?php 

$firstName = $_POST['user_firstName'];
$secondName = $_POST['user_secondName'];
$email = $_POST['user_email'];
$file = $_POST['file'];
$text = $_POST['user_text'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'magmatov95@mail.ru';                 // Наш логин
$mail->Password = 'skbf#jhbfskjbB';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('magmatov95@mail.ru', 'Денис Магматов');   // От кого письмо 
$mail->addAddress('nurali.davlatov.97@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['user_file']['tmp_name'], $_FILES['user_file']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая Заявка с Сайта (портфолио).';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $firstName . ' <br>
	Фамилия: ' . $secondName . ' <br>
	E-mail: ' . $email . ' <br>
	Сообшение: ' . $text . '';

$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Ошибка";
} else {
    echo "Успех";
}

?>