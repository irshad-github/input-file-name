$("#file-upload").change(function (){
			$.each(this.files,function (index,file) {
				if (file.size > 20971520){
					$("#file-upload").val("");
					alert("File size should not be more 20MB");
					return false;
				}
			});
			var files = $(this).prop("files");
			var names = $.map(files, function(val) { return val.name });
			$('#feedback').text(names.join(", ")).show();
		});
