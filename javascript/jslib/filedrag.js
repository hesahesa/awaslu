/*
filedrag.js - HTML5 File Drag & Drop demonstration
Featured on SitePoint.com
Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
*/
(function() {

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}


	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}


	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			//ParseFile(f);
			UploadFile(f);
		}

	}


	// output file information
	function ParseFile(file) {

		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);

		// display an image
		if (file.type.indexOf("image") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				Output(
					"<p><strong>" + file.name + ":</strong><br />" +
					'<img src="' + e.target.result + '" /></p>'
				);
			}
			reader.readAsDataURL(file);
		}

		// display text
		if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				Output(
					"<p><strong>" + file.name + ":</strong></p><pre>" +
					e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
					"</pre>"
				);
			}
			reader.readAsText(file);
		}

	}


	// upload JPEG files
	function UploadFile(file) {

		var xhr = new XMLHttpRequest();
		if (xhr.upload && file.type == "image/jpeg" && file.size <= $id("MAX_FILE_SIZE").value) {

			// create progress bar
			var o = $id("progress");
			var progress = o.appendChild(document.createElement("p"));
			progress.appendChild(document.createTextNode("upload " + file.name));


			// progress bar
			xhr.upload.addEventListener("progress", function(e) {
				var pc = parseInt(100 - (e.loaded / e.total * 100));
				progress.style.backgroundPosition = pc + "% 0";
			}, false);

			// file received/failed
			xhr.onreadystatechange = function(e) {
				if (xhr.readyState == 4) {
					progress.className = (xhr.status == 200 ? "success" : "failure");
					console.log(xhr.response);
					$id("FILE_UPLOAD_URL").value = (JSON.parse(xhr.response)).file_name;
					$id("submitbuttontext").innerHTML = "Kirim Laporan";
					/*$("#submitbuttontext").on("click", function(evt) {
						evt.preventDefault();
						var xhr2 = new XMLHttpRequest();
						xhr2.open("POST", $id("uploadForm").action, true);
						xhr2.send(file);
						xhr2.onreadystatechange = function(e) {
							if (xhr2.readyState == 4) {
								if(xhr2.status == 200) {
									alert("uploaded");
									console.log(xhr2.response);
								}
							};
						hideDialogue("dialogue");
						}
					} );*/
					$('#submitbuttontext').click(function(e){
						e.preventDefault();
						$.ajax({
							type: 'POST',
							cache: false,
							url: './backend/writenewlaporan.php',
							data: 'picture_url='+$("#FILE_UPLOAD_URL").val()+'&title='+$("#title").val()+'&description='+$("#description").val()+'&caleg_id_API='+$("#caleg_id_API").val()+'&latitude='+$("#latitude").val()+'&longitude='+$("#longitude").val()+'&party_id_API='+$("#party_id_API").val()+'&user_id='+$("#user_id").val()+'&area_id='+$("#area_id").val(),
							success: function(msg) {
								alert("uploaded");
								console.log(msg);
								hideDialogue("dialogue");
							}
						});
					});
					$id("detailField").style.display = "block";
					$id("submitbutton").style.display = "block";
					$id("uploadField").style.display = "none";
				}
			};

			// start upload
			xhr.open("POST", "./backend/file_uploader.php", true);
			xhr.setRequestHeader("X_FILENAME", file.name);
			xhr.send(file);

		}

	}


	// initialize
	function Init() {

		var fileselect = $id("fileselect"),
			filedrag = $id("filedrag"),
			submitbutton = $id("submitbutton"),
			detailField = $id("detailField");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {

			// file drop
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			filedrag.style.display = "block";

			// remove submit button
			submitbutton.style.display = "none";
			detailField.style.display = "none";
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();