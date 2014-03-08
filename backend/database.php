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
?>