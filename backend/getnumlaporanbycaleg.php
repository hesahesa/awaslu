<?php
	include_once "database.php";
	
	// getnumlaporanbycaleg.php?caleg_id=[nn]
	// return json of array of laporan with caleg_id = nn
	// errors: - nn not exist
	$caleg_id = $_GET["caleg_id"];
	
	$objres = calculatenumberofreport($caleg_id);
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