


$('#timezoneBtnRun').click(function () {

	$('#timezoneLatitude').change(function () {
		var lat = $(this).val();
		console.log(lat);
	});
	$('#timezoneLongtitude').change(function () {
		var long = $(this).val();
		console.log(long);
	});
	

		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#timezoneLatitude').val(),
				longtitude: $('#timezoneLongtitude').val()
			},
			success: function(result) {
				
				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCurrentTime').html(result['data']['time']);
					$('#txtSunrise').html(result['data']['sunrise']);
					$('#txtSunset').html(result['data']['sunset']);
					$('#timezoneTxtCountry').html(result['data']['countryName']);
					$('#timezoneTxtCountryCode').html(result['data']['countryCode']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});