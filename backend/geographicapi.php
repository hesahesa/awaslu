<?php
function getapikey(){
	return "426c044849d8f98b1591c2643275eca3";
}
function getjsonarea($lat,$long){
	$key = getapikey();
	$ret = file_get_contents("http://api.pemilu.org/geographic/api/point?apiKey=".$key."&lat=".$lat."&long=".$long);
	return $ret;
}

function getareabyid($id){
//return detail of an area
	$key = getapikey();
	$ret = file_get_contents("http://api.pemilu.org/geographic/api/area/".$id."?apiKey=".$key);
	return $ret;
}

?>