<?php
function getapikey(){
	return "426c044849d8f98b1591c2643275eca3";
}
function getjsonarea($lat,$long){
	$key = getapikey();
	$ret = file_get_contents("/geographic/api/point?apiKey=".$key."&lat=".$lat."&long=".$long);
	return $ret;
}

function getareabyid($id){
	$key = getapikey();
	$ret = file_get_contents("/geographic/api/area/".$id."?apiKey=".$key);
}

?>