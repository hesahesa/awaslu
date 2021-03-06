<?php
	include_once "database.php";
	
	// getalllaporan.php?area_id=[pp]&pagenum=[nn]&pagesize=[oo]
	// return json of array of laporan with page number = nn, with page size oo
	// errors: - nn not exist
	$area_id = $_GET["area_id"];

	$pagenum = $_GET["pagenum"];
	$pagesize = 10; // default pagesize
	if(isset($_GET["pagesize"])) {
		$pagesize = $_GET["pagesize"];
	}
	
	// need to sanitize input, but aint nobody got time fo dat
	$from = ($pagenum - 1) * $pagesize;
	$to = $from + $pagesize - 1;
	$objres = extractdatalaporansbyarea($from, $to, $area_id);
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