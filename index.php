<html>
<head>
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="javascript/NeoClient/client.js"></script>
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/global.css" />
<link rel="stylesheet" type="text/css" href="css/cards.css" />
<script type="text/javascript">
$(document).ready(function(){
	pemilu.ui.ready();
});
</script>
</head>
<body>

<div id="wrapper">
	<div class="gCard" id="nav">
		<ul>
			<li>Home</li>
			<li>Most Shared</li>
		</ul>
	</div>
	<div id="report-list">
	<div class="gCard" rv-each-post="controller.reports">
		<div>
			<div class="post-title">
				<span>{ post.title }</span>
			</div>
			<div class="post-image">
				<span><img rv-src="post.image" /></span>
			</div>
			<div class="post-info">
				<div class="post-info-likes"></div>
				<div class="post-info-share">
					<a class="iButton" href="#">share</a>
				</div>
			</div>
		</div>
	</div>
	</div>
</div>

</body>
</html>