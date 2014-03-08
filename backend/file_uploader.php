<?php
/*
Server-side PHP file upload code for HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
include_once "database.php";
$filePath = (isset($_POST['picture_url']) ? $_POST['picture_url'] : false);

if($filePath) {	
	// writenewlaporan.php
	// method POST
	// param title, picture_url,description,date,caleg_id_API,latitude,longitude,party_id_API,user_id
	// return json of status
	// errors: - nn not exist
	extract($_POST);
	
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
	exit();
}


$fn = (isset($_SERVER['HTTP_X_FILENAME']) ? $_SERVER['HTTP_X_FILENAME'] : false);

if ($fn) {

	$newname = trim(com_create_guid(), '{}').$fn;
	// AJAX call
	file_put_contents(
		'uploads/' . $newname,
		file_get_contents('php://input')
	);
	$result = json_encode(array('status' => 'success', 'file_name' => $newname), JSON_FORCE_OBJECT);
	echo $result;
	exit();
}
else {

	// form submit
	$files = $_FILES['fileselect'];

	foreach ($files['error'] as $id => $err) {
		if ($err == UPLOAD_ERR_OK) {
			$fn = $files['name'][$id];
			$newname = trim(com_create_guid(), '{}').$fn;
			move_uploaded_file(
				$files['tmp_name'][$id],
				'uploads/' . $newname
			);
			$result = json_encode(array('status' => 'success', 'file_name' => $newname), JSON_FORCE_OBJECT);
			echo $result;
		}
	}
	exit();
}
$result = json_encode(array('status' => 'failed', 'file_url' => 'failed'), JSON_FORCE_OBJECT);
echo $result;
?>