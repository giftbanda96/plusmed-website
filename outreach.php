<?php

echo "hi";

print_r($_POST);

if (
  isset($_POST['name']) &&
  isset($_POST['age']) &&
  isset($_POST['gender']) &&
  isset($_POST['school']) &&
  isset($_POST['parent']) &&
  isset($_POST['email']) &&
  isset($_POST['phone']) &&
  isset($_POST['message']) &&
  isset($_POST['date'])
) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "info@plusmedicalrehab.com";

  $name = $_POST['name']; // required
  $age = $_POST['age']; // required
  $gender = $_POST['gender']; // required
  $school = $_POST['school']; // not required
  $parent = $_POST['parent']; // required
  $email = $_POST['email']; // required
  $phone_number = $_POST['phone']; // required
  $msg = $_POST['message']; // not required
  $date = $_POST['date']; // not required

  $error_message = "";

  $email_subject = "NDITHA KUYENDA APPLICATION -" . $_POST['name'];

  $email_message = "Form details below.\n\n";

  function clean_string($string)
  {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Name: " . clean_string($name) . "\n";
  $email_message .= "Age: " . clean_string($age) . "\n";
  $email_message .= "Gender: " . clean_string($gender) . "\n";
  $email_message .= "School: " . clean_string($school) . "\n";
  $email_message .= "Parent: " . clean_string($parent) . "\n";
  $email_message .= "Email: " . clean_string($email) . "\n";
  $email_message .= "Phone Number: " . clean_string($phone_number) . "\n";
  $email_message .= "Message: " . clean_string($msg) . "\n";
  $email_message .= "Application Date: " . clean_string($date) . "\n" . "\n";

  // create email headers
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($email_to, $email_subject, $email_message, $headers);

  echo "success";
} else {
  echo "Some required fields are missing.";
}
