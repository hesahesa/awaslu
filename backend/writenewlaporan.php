<?php
	include_once "database.php";
	
	// writenewlaporan.php
	// method POST
	// param title, picture_url,description,date,caleg_id_API,latitude,longitude,party_id_API,user_id
	// return json of status
	// errors: - nn not exist
	extract($_POST);
	print_r($_POST);
	
	$objres = storelaporan($title, $picture_url, $description, $caleg_id_API, $latitude, $longitude, $party_id_API, $user_id, $area_id);
	//print_r($objres);
	$valid = array_filter($objres);

	if (!empty($valid)) {
		// found
		echo json_encode($objres);
	}
	else {
		// not found
		echo "notfound";
	}
?>