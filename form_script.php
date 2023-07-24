<?php
$name=$_POST['name'];
$contact=$_POST['contact'];
$email=$_POST['email'];
$message=$_POST['subject'];

$data=$name.",".$contact.",".$email.",".$message;

$file="reachus.csv";

file_put_contents($file,$data . PHP_EOL, FILE_APPEND);
header("Location: index.html");

?>