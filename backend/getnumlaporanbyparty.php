<?php
	include_once "database.php";
	
	// getnumlaporanbyparty.php?party_id=[nn]
	// return json of array of laporan with party_id = nn
	// errors: - nn not exist
	$party_id = $_GET["party_id"];
	
	$objres = calculatenumberofreport_party($party_id);
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