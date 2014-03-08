<?php
	include_once "database.php";
	
	// getlaporan.php?laporan_id=[nn]
	// return json of laporan with id = nn
	// errors: - nn not exist
	$laporan_id = $_GET["laporan_id"];
	
	// need to sanitize input, but aint nobody got time fo dat
	$objres = extractdatalaporan($laporan_id);
	//print_r($objres);
	$valid = array_filter($objres);

	if (!empty($valid)) {
		// found
		echo json_encode($objres[0]);
	}
	else {
		// not found
		echo "not found";
	}
?>