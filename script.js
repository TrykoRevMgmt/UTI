/*jshint esversion: 6 */
var xhttp = new XMLHttpRequest();
//Event Listners that run script when action is completed ??add for bucket adjustemtns?
//document.getElementById("bDate").addEventListener("input", eLstnr);
//document.getElementById("eDate").addEventListener("input", eLstnr);




//Main Function
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
        var JSONObj = JSON.parse(xhttp.responseText);
				// var leadSourceArr = Object.keys(JSONObj);
				// var leadSource = '';
				// for (let i = 0; i < leadSourceArr.length; i++) {
				// 	leadSource += '<option>'+leadSourceArr[i]+'</option>' ;
				// }
				// document.getElementById('leadSource').innerHTML = leadSource;
				//
				// document.getElementById('leadSource').addEventListener("input", refreshUTM);
        var url = window.location.search.substring(1).split('&');
				var utmObj = {};
				for (let i = 0; i < url.length; i++) {
						let Param = url[i].split('=');
						let key = Param[0];
						let value = Param[1];
						utmObj[Param[0]] = Param[1];
				};
				console.log(window.location.href);
        var email = JSONObj[utmObj.utm_source].email;
        var phone = JSONObj[utmObj.utm_source].phone;
        document.getElementById('email').innerHTML = email;
        document.getElementById('phone').innerHTML = phone;
				document.getElementById('utm').innerHTML = 'www.(insert page url here).com'+ window.location.search;
      }
    };



xhttp.open("GET", "https://script.google.com/macros/s/AKfycbyHkQo4UxDATiAwJBzt0jwv5P-Bet5c_Fo1afimjaH9Y91V86SX/exec", true);
xhttp.send();

function refreshUTM() {
		console.log('utm change');
}
var testObj = {
	propertyID: 'pg',
	AdSource: 'website',
	phone: '421-444-4444',
	email: 'adam@mail.com'
};
