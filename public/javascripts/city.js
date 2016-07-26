jQuery(document).ready(function($) {
	$.get('../src/province.json', function(data) {
		for (var i in data) {
			$("#proSelector").append("<option value='"+data[i].name+"'>"+data[i].name+"</option>");
		};
	});

	$('#proSelector').change(function(event) {
		$('#citySelector').html('<option value="请选择城市">请选择城市</option>');
		var selectedPro = $("#proSelector").val();
		getProID(selectedPro, function(proID) {
			$.get('../src/city.json', function(data) {
				for (var i in data) {
					if(data[i].ProID == proID) {
						var cityName = data[i].name;
						var cityID = data[i].CityID;
						$('#citySelector').append("<option value='"+cityName+"'>"+cityName+"</option>");
					}
				};
			});
		})
	});

	function getProID(proName, cb) {
		var proID = null;
		$.get('../src/province.json', function(data) {
			for (var i in data) {
				if(proName == data[i].name){
					proID = data[i].ProID;
					cb(proID);
				};
			};
		});
	}
});