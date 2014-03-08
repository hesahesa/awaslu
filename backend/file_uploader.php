<?php
/*
Server-side PHP file upload code for HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
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