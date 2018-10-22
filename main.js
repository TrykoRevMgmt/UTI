//sample JSON obj

var JSONObj ={
  zillow:{'phone':'412-444-4444', 'email':'zillowemail@email.com'},
  Adwords:{'phone':'412-444-5555', 'email':'awemail@email.com'},
  facebook:{'phone':'412-444-6666', 'email':'fbemail@email.com'}
};


window.onload = function () {

  var url = window.location.search.substring(1);
  var email = JSONObj[url].email;
  var phone = JSONObj[url].phone;

  document.getElementById('email').innerHTML = email;
  document.getElementById('phone').innerHTML = phone;
};
