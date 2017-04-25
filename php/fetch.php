<?php 
// remove all session variables
session_start();

if(isset($_POST['user'] )) {

	$user = $_POST['user'];
	$text = $_POST['text'];
	$data = array('user' => $user, 'text' => $text);
	//This is using session . You can change database insert query and select query
	$_SESSION['data'][] = $data;

	echo json_encode(array($_SESSION));	
}

echo json_encode($_SESSION);	


// session_unset(); 
// // destroy the session 
// session_destroy(); 

?>