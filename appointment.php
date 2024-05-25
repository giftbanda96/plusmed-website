<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['service']) && isset($_POST['date']) && isset($_POST['message'])) {

	  
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@plusmedicalrehab.com";    
 
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $phone_number = $_POST['phone']; // required
    $msg = $_POST['message']; // not required
    $date = $_POST['date']; // not required
    $service = $_POST['service']; // not required
 
    $error_message = "";


 
 	$email_subject = "Appointment Booking -".$_POST['name'];

    $email_message = "Form details below.\n\n";
 
     //die("pass2");
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Phone Number: ".clean_string($phone_number)."\n";
    $email_message .= "Service: ".clean_string($service)."\n";
    $email_message .= "Proposed Date: ".clean_string($date)."\n"."\n";
    
    
    $email_message .= "Message: ".clean_string($msg)."\n";
 
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n".
'X-Mailer: PHP/' . phpversion();

mail($email_to, $email_subject, $email_message, $headers);  

echo "success";
 
}
?>