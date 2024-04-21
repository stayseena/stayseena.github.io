<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$delivery = $_POST['delivery'];
$addtext = $_POST['addtext'];

$mestext="Имя: ".$fullname.
		 "\nE-mail: ".$email.
		 "\nТелефон: ".$phone.
		 "\nТип доставки: ".$delivery.
		 "\nЧисло и пожелания: ".$addtext;

if(isset($fullname) && isset($email) && isset($phone) && isset($delivery)) {
	if(mail("Tapochek2002sun@gmail.com", 'Заказ на сайте', $mestext)) { $result = 1; }
	else { $result = 3; }
}
else { $result = 2; }
echo '{"result": "'.$result.'"}';
?>