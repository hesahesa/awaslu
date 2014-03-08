<html>
<head>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, width=device-width" >
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="javascript/jslib/raphael.min.js"></script>
<script type="text/javascript" src="javascript/jslib/charts.min.js"></script>
<script type="text/javascript" src="javascript/NeoClient/client.js"></script>
<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,100' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/global.css" />
<link rel="stylesheet" type="text/css" href="css/cards.css" />
<link rel="stylesheet" type="text/css" href="icon/style.css" />
<link rel='stylesheet' media='screen and (max-width: 480px)' href='css/mobile.css' />
<link rel='stylesheet' media='screen and (max-width: 1024px)' href='css/tablet.css' />
<script type="text/javascript">
$(document).ready(function(){
	pemilu.ui.ready();



});
</script>
</head>
<body>

<div class="gCard" id="nav">
	<ul>
		
		<li id="report-view-all">Awas lu!</li>
		<li id="report-view-most">Most Shared</li>
		<li>
			<div id="addReport">
				<a href="#" class="iButton">+</a>
			</div>
		</li>
	</ul>
	
</div>

<div id="wrapper">
	<div id="news-feed">
		
	</div>
	<div id="report-list">
	<div class="gCard" rv-each-post="controller.reports">
		<div class="innerWrapper">
			<div class="post-title">
				<span class="title">{ post.title }</span>
				<span class="date">{ post.date }</span>
			</div>
			<div class="post-info"> 
				<div>
					<img class="post-image" rv-src="post.picture_url" />
					<div class="additional-info">
						<div class="caleg-info">
							<img src="http://rinaldimunir.files.wordpress.com/2013/04/emil.jpeg" />
							<span>{ post.party_id }</span>
							<div rv-class='post.id | chartClass' style='width: 300px; height: 300px;margin-top: -40px;'></div>
						</div>
						<div class="description">
						{ post.description } 
						</div>
						<span class="see-more">See More</span>
					</div>
				</div>
			</div>
			<div class="post-info">
				<div class="post-info-likes">
				dishare sebanyak { post.sharecounter } kali
				</div>
				<div class="post-info-share">
					<a class="iButton" href="#"><span class="icon-share"></span></a>
				</div>
			</div>
			<div class="clearthis"></div>
		</div>
	</div>
	</div>
</div>


<div id="dialogue-container">
	<div id="dialogue" class="gCard">
		<div>
			<form id="uploadForm" action="./backend/file_uploader.php" enctype="multipart/form-data" method="post">
				<fieldset>
				<legend>Upload Gambar</legend>

				<input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="1000000" />
				<input type="hidden" id="FILE_UPLOAD_URL" name="picture_url" value="" />
				
				<div id="detailField">
				Judul Laporan : <input type="text" id="titleLaporan" name="title" value="" /> <br />
				Deskripsi Laporan : <input type="text" id="deskripsiLaporan" name="description" value="" /> <br />
				Caleg ID : <input type="text" id="calegID" name="caleg_id_API" value="" /> <br />
				Latitude : <input type="text" id="latitude" name="latitude" value="" /> <br />
				Longitude : <input type="text" id="longitude" name="longitude" value="" /> <br />
				Party ID : <input type="text" id="partyID" name="party_id_API" value="" /> <br />
				user ID : <input type="text" id="userID" name="user_id" value="" /> <br />
				Area ID : <input type="text" id="areaID" name="area_id" value="" /> <br />
				</div>

				<div id="uploadField">
					<label for="fileselect">Files to upload:</label>
					<input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
					<div id="filedrag">or drop files here</div>
				</div>

				<div id="submitbutton">
					<button id="submitbuttontext" type="submit">Upload Files</button>
				</div>

				</fieldset>
			</form>
			<div id="progress"></div>
		</div>
	</div>
</div>
<div id="dialogue-overlay"></div>
<script src="./javascript/jslib/filedrag.js"></script>
</body>
</html>