


$('#codeBtnRun').click(function () {

	$('#codeLatitude').change(function () {
		var lat = $(this).val();
		console.log(lat);
	});
	$('#codeLongtitude').change(function () {
		var long = $(this).val();
		console.log(long);
	});
	

		$.ajax({
			url: "libs/php/getCodes.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#codeLatitude').val(),
				longtitude: $('#codeLongtitude').val()
			},
			success: function(result) {
				
				console.log(result);

				if (result.status.name == "ok") {
                    
                   
                    if (!result.data.status){
						$('#codeTxtCode').html(result['data']['countryCode']);
						$('#codeTxtCountry').html(result['data']['countryName']);
                    }
                    else 
                        {
						$('#codeTxtCode').html('0');
						$('#codeTxtCountry').html('None');
                        }
					

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});