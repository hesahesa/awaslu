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
?>