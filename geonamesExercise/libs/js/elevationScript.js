


$('#elevationBtnRun').click(function () {

	$('#elevationLatitude').change(function () {
		var lat = $(this).val();
		console.log(lat);
	});
	$('#elevationLongtitude').change(function () {
		var long = $(this).val();
		console.log(long);
	});
	

		$.ajax({
			url: "libs/php/getElevation.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#elevationLatitude').val(),
				longtitude: $('#elevationLongtitude').val()
			},
			success: function(result) {
				
				console.log(result);

				if (result.status.name == "ok") {
                    
                   
                    if (!result.data.status){
                        $('#txtElevation').html(result['data']['srtm1']);
                    }
                    else 
                        {
                        $('#txtElevation').html('0');    
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