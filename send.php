<?php
    //Получаем данные из глобальной переменной $_GET, так как мы передаем данные методом GET
    $name = $_POST['name']; // Вытаскиваем имя в переменную
    $phone = $_POST['phone']; // Вытаскиваем имя в переменную
    $message = "Имя: $name <br /><br />Телефон: $phone<br />"; // Формируем сообщение, отправляемое на почту
    $to = "life.irina@gmail.com"; // Задаем получателя письма
    $from = "uniqueschool.com.ua"; // От кого пришло письмо
    $subject = "Заказ с Вашего сайта"; // Задаем тему письма
    $headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n"; // Формируем заголовок письма (при неправильном формировании может ломаться кодировка и т.д.)
    if (mail($to, $subject, $message, $headers)) { // При помощи функции mail, отправляем сообщение, проверяя отправилось оно или нет
        echo '<center><br /><br /><br /><h1 style="font-size: 25pt;color:#FFFFFF;font-family:Tahoma;"><b>Сообщение успешно отправлено.</b></h1></center>'; // Отправка успешна
    }
    else {
        echo "<p>Что-то пошло не так, как планировалось</p>"; // Письмо не отправилось
    }

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';

$mail->Host       = "smtp.gmail.com";
$mail->SMTPDebug  = 0;
$mail->SMTPAuth   = true;
$mail->Port       = 465;
$mail->Username   = "ihormosk@gmail.com";
$mail->Password   = "moskal1994";

$mail->From = 'uniqueschool.com.ua';
$mail->Subject = 'Заказ с Вашего сайта';
$mail->addAddress($to);
$mail->Body = $message;

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully";
}
