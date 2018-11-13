
var xhttp = new XMLHttpRequest();
//Event Listners that run script when action is completed ??add for bucket adjustemtns?
//document.getElementById("bDate").addEventListener("input", eLstnr);
//document.getElementById("eDate").addEventListener("input", eLstnr);




//Main Function
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
        var JSONObj = JSON.parse(xhttp.responseText);
        console.log(JSONObj);
				var leadSourceArr = Object.keys(JSONObj);
				var leadSource = '';
				for (var i = 0; i < leadSourceArr.length; i++) {
					leadSource += '<option>'+leadSourceArr[i]+'</option>' ;
				}
				document.getElementById('leadSource').innerHTML = leadSource;
				console.log(leadSource);

				document.getElementById('leadSource').addEventListener("input", refreshUTM);
        var url = window.location.search.substring(1);
        var email = JSONObj[url].email;
        var phone = JSONObj[url].phoneNum;
        document.getElementById('email').innerHTML = email;
        document.getElementById('phone').innerHTML = phone;
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

	const scriptURL = 'https://script.google.com/macros/s/AKfycbzazLgaOkVvFv8VehD-hdgOGUvwo-MIGbOzi2Q7SdmqhXT5prPr/exec'
	const form = document.forms['contact'];
	form.addEventListener('submit', e => {
	e.preventDefault()
	var data = new FormData(form);
	var data2 = JSON.stringify(testObj);
	fetch(scriptURL, { method: 'POST', body: data})
	 .then(response => console.log('Success!', response))
	 .catch(error => console.error('Error!', error.message))
	});;
