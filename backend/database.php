<?php
	include_once "settings.php";

	function connect_pdo(){
		$db = new PDO('mysql:host='.HOST.';dbname='.DBNAME, USER, PASS);
		return $db;
	}
	
	function storelaporan ($title, $url, $desc, $date, $caleg_id_api, $latitude, $longitude, $party_id_api, $user_id){
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		  // Define an insert query
		$prepared = $db->prepare("INSERT INTO report_tbl (title, picture_url,description,date,caleg_id_API,latitude,longitude,party_id_API,user_id)
			VALUES
			  (:title, :url, :desc, :date, :caleg_id_api, :latitude, :longitude, :party_id_api, :user_id)");
		$prepared->bindParam(":title", $title);
        $prepared->bindParam(":url", $url);
		$prepared->bindParam(":desc", $desc);
		$prepared->bindParam(":date", $date);
		$prepared->bindParam(":caleg_id_api", $caleg_id_api);
		$prepared->bindParam(":latitude", $latitude);
		$prepared->bindParam(":longitude", $longitude);
		$prepared->bindParam(":party_id_api", $party_id_api);
		$prepared->bindParam(":user_id", $user_id);
		$status = $prepared->execute(); 
		

		$db = null;        // Disconnect
		
		return $status;		
	}
	function extractdatalaporan($id) {
		// param : id laporan
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT id, title, picture_url, description, `date`, caleg_id_API, latitude, longitude, party_id_API, user_id , coalesce(counter, 0) as sharecounter
				FROM report_tbl
				LEFT OUTER JOIN (
					SELECT report_id, count(*) as counter FROM shares_tbl GROUP BY report_id
				) tb2
				ON report_tbl.id = tb2.report_id
				where id = :id;";
		
		$prepared = $db->prepare($string_prep_query);
		$prepared->bindParam(":id", $id);
        $status = $prepared->execute();
		
		/*if($status)
			cetakDataPesanan($prepared->fetch());
		
		$db = null;
		return $status;*/
		$ret = $prepared->fetchAll();
		$db = null;
		return $ret;
	}
	
	function extractdatalaporans($from, $to) {
		// param : span pagination
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT id, title, picture_url, description, `date`, caleg_id_API, latitude, longitude, party_id_API, user_id , coalesce(counter, 0) as sharecounter
				FROM report_tbl
				LEFT OUTER JOIN (
					SELECT report_id, count(*) as counter FROM shares_tbl GROUP BY report_id
				) tb2
				ON report_tbl.id = tb2.report_id
				order by date desc
				limit :from, :to;";
		
		$prepared = $db->prepare($string_prep_query);
		$prepared->bindParam(":from", $from, PDO::PARAM_INT);
        $prepared->bindParam(":to", $to, PDO::PARAM_INT);
		$status = $prepared->execute();
		
		/*if($status)
			cetakDataPesanan($prepared->fetch());
		
		$db = null;
		return $status;*/
		$ret = $prepared->fetchAll();
		$db = null;
		return $ret;
	}
	
	function extractdatalaporansshared($from, $to) {
		// param : span pagination
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT id, title, picture_url, description, `date`, caleg_id_API, latitude, longitude, party_id_API, user_id , coalesce(counter, 0) as sharecounter
				FROM report_tbl
				LEFT OUTER JOIN (
					SELECT report_id, count(*) as counter FROM shares_tbl GROUP BY report_id
				) tb2
				ON report_tbl.id = tb2.report_id
				order by sharecounter desc
				limit :from, :to;";
		
		$prepared = $db->prepare($string_prep_query);
		$prepared->bindParam(":from", $from, PDO::PARAM_INT);
        $prepared->bindParam(":to", $to, PDO::PARAM_INT);
		$status = $prepared->execute();
		
		/*if($status)
			cetakDataPesanan($prepared->fetch());
		
		$db = null;
		return $status;*/
		$ret = $prepared->fetchAll();
		$db = null;
		return $ret;
	}
	
	function calculatenumberofreport_caleg($caleg_id) {
		// param : caleg id
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT DATE(`date`) as date, count(*) as value FROM `report_tbl` where caleg_id_API = :caleg_id group by DATE(`date`)";
		
		$prepared = $db->prepare($string_prep_query);
		$prepared->bindParam(":caleg_id", $caleg_id);
		$status = $prepared->execute();
		
		/*if($status)
			cetakDataPesanan($prepared->fetch());
		
		$db = null;
		return $status;*/
		$ret = $prepared->fetchAll();
		$db = null;
		return $ret;
	}
	
	function calculatenumberofreport_party($party_id) {
		// param : caleg id
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT DATE(`date`) as date, count(*) as value FROM `report_tbl` where party_id_API = :party_id group by DATE(`date`)";
		
		$prepared = $db->prepare($string_prep_query);
		$prepared->bindParam(":party_id", $party_id);
		$status = $prepared->execute();
		
		/*if($status)
			cetakDataPesanan($prepared->fetch());
		
		$db = null;
		return $status;*/
		$ret = $prepared->fetchAll();
		$db = null;
		return $ret;
	}

?>