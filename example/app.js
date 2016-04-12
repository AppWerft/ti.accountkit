var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var accountkit = require('ti.accountkit');
accountkit.initialize(accountkit.RESPONSE_TYPE_AUTHORIZATION_CODE);

accountkit.addEventListener("success", function(e) {
	Ti.API.warn("success");
	Ti.API.warn(e);
});

accountkit.addEventListener("cancel", function(e) {
	Ti.API.warn("cancel");
	Ti.API.warn(e);
});

accountkit.addEventListener("error", function(e) {
	Ti.API.warn("error");
	Ti.API.warn(e);
});

var btn1 = Ti.UI.createButton({
    top: 40,
    title: "Login with Phone"
});
btn1.addEventListener("click", function() {
    accountkit.loginWithPhone();
});

var btn2 = Ti.UI.createButton({
    top: 80,
    title: "Login with E-Mail"
});
btn2.addEventListener("click", function() {
    accountkit.loginWithEmail();
});

win.add(btn1,btn2);
win.open();