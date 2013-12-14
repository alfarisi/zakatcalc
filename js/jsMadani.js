(function($) {

$.jsMadani = {

	getData : function (div, pageURL) {
		//$(div).slideUp("slow");
		
		$.ajax({
			type: "GET",
			url: pageURL,
			beforeSend: function() {
				$(div).html('Loading.. Mohon tunggu sebentar, atau silahkan refresh halaman jika terlalu lama.');
			},
			success: function(html) {
				$(div).html(html);
			}
		});
		
		//$(div).show("fast");
	},
	
	postData : function (div, pageURL, params) {
		//$(div).slideUp("slow");
		
		$.ajax({
			type: "POST",
			url: pageURL,
			data: params,
			beforeSend: function() {
				$(div).html('Loading.. Mohon tunggu sebentar, atau silahkan refresh halaman jika terlalu lama.');
			},
			success: function(html) {
				$(div).html(html);
			}
		});
		
		//$(div).show("fast");
	},
	
	createQuery : function (form) {
		var elements = document.getElementById(form);
		var pairs = new Array();

		for (var i = 0; i < elements.length; i++) {
			if ((name = elements[i].name)) {
				value = elements[i].value;
				pairs.push(name + "=" + value);
			}
		}

		return pairs.join("&");
	},
	
	toIndonesianNumber : function (num, decIfZero) {
		num = parseFloat(num);
		decplaces = 2;
		if (!isNaN(num)) {
			var str = "" + Math.round (eval(num) * Math.pow(10,decplaces));
			if (str.indexOf("e") != -1) {
				alert("Out of Range");
				return "0,00";
			}
			while (str.length <= decplaces) {
				str = "0" + str;
			}
			var decpoint = str.length - decplaces;
        
			ribuan = str.substring(0,decpoint);
		
			for (var i = 0; i < Math.floor((ribuan.length-(1+i))/3); i++) {
				depan = ribuan.substring(0,ribuan.length-(4*i+3));
				if (depan != '-') {
					ribuan = depan + '.' + ribuan.substring(ribuan.length-(4*i+3));
				}
			}
		
			desimal = str.substring(decpoint, str.length);
		
			if (desimal == '00' && decIfZero == false) {
				return ribuan;
			} else {
				return ribuan + "," + desimal;
			}
		} else {
			return "0,00";
		}
	},
	
	indonesianNumberToFloat : function (str) {
		temp1 = str.toString().replace(/\./g, '');
		temp2 = temp1.toString().replace(/,/g, '.');
		numfloat = parseFloat(temp2);
		if (isNaN(numfloat)) {
			return 0.00;
		} else {
			return numfloat;
		}
	},
	
	numAsString : function (num) {
		numstring = '' + num;
		return numstring;
	}
	
}

})(jQuery);