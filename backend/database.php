<?php
	include_once "settings.php";

	function connect_pdo(){
		$db = new PDO('mysql:host='.HOST.';dbname='.DBNAME, USER, PASS);
		return $db;
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
		$prepared = $db->prepare("select * from report_tbl where id = :id;");
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
		// param : id laporan
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		$prepared = $db->prepare("select * from report_tbl order by date desc limit :from , :to ;");
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
		// param : id laporan
		$db;
		try {
			$db = connect_pdo();
		}
		catch (PDOException $ex) {
			return false;
		}
		
		$string_prep_query = "SELECT id, title, picture_id, description, `date`, caleg_id_API, lat, `long`, party_id_API, user_id , coalesce(counter, 0) as sharecounter
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
?>