<?php
if($_REQUEST['name'] == '' || $_REQUEST['email'] == '' || $_REQUEST['subject'] == '' ||  $_REQUEST['message'] == ''):
  return "error";
endif;
if (filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)):
  $subject = 'Email from REEN HTML5 Template by JEWEL THEME'; // Subject of your email

  // Receiver email address
  $to = 'example@gmail.com';  //Change the email address by yours
 

  // prepare header
  $header = 'From: '. $_REQUEST['name'] . ' <'. $_REQUEST['email'] .'>'. "\r\n";
  $header .= 'Reply-To:  '. $_REQUEST['name'] . ' <'. $_REQUEST['email'] .'>'. "\r\n";
  // $header .= 'Cc:  ' . 'example@domain.com' . "\r\n";
  // $header .= 'Bcc:  ' . 'example@domain.com' . "\r\n";
  $header .= 'X-Mailer: PHP/' . phpversion();


  $message .= 'Name: ' . $_REQUEST['name'] . "\n";
  $message .= 'Email: ' . $_REQUEST['email'] . "\n";
  $message .= 'Subject: ' . $_REQUEST['subject'] . "\n";
  $message .= 'Message: '. $_REQUEST['message'];

  // Send contact information
  $mail = mail( $to, $subject, $message, $header );

  echo 'sent';
  else:
    return "error";
  endif; 

?>