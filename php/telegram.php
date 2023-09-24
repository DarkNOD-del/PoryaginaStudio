<?php
$name = $_POST['user_name'];
$phone = $_POST['user_email'];
$email = $_POST['user_phone'];
$event_date = $_POST['user_event_date'];
$note = $_POST['user_note'];

$token = "6207474555:AAEPOd7oSn4GP_L_LetqRNXBWlf-DXe3xMY";
$chat_id = "-1001853940603";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email: ' => $email,
  'Телефон: ' => $phone,
  'Дата: ' => $event_date,
  'Примечание: ' => $note,
);

$txt .= "<b>НОВАЯ ЗАПИСЬ</b>%0A";

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  $message = "Сообщение успешно отправлено. Ожидайте звонка :-)";
} 
else {
  $message = "Не удалось отправить сообщение... Попробуйте позже";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>