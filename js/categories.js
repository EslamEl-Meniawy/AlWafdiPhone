if (localStorage.getItem('layout') == 2){
    $('#theme').attr('checked', true);
} else {
    $('#theme').checked=false;
}
if (localStorage.getItem('urgentpop') == 1){
    $('#urgentpop').attr('checked', true);
} else {
    $('#urgentpop').checked=false;
}
var checked = JSON.parse(localStorage.getItem('checked'));
// Change 14 to 15
for (var i = 1; i < 14; i++) {
	if (checked[i] == 1) {
		$('#sec' + i).attr('checked', true);
	} else {
		$('#sec' + i).checked=false;
	}
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
	$('#save').click(function() {
	    if ($('#theme').is(':checked')) {
	        localStorage.setItem('layout', 2);
	    } else {
	        localStorage.setItem('layout', 1);
	    }
	    if ($('#urgentpop').is(':checked')) {
	        localStorage.setItem('urgentpop', 1);
	    } else {
	        localStorage.setItem('urgentpop', 0);
	    }
	    // Change 14 to 15
	    for (var i = 1; i < 14; i++) {
	    	if ($('#sec' + i).is(':checked')) {
	    		checked[i] = 1;
	    	} else {
	    		checked[i] = 0;
	    	}
	    }
	    localStorage.setItem('checked', JSON.stringify(checked));
	    onBackKeyDown();
	});
	$('#back').click(onBackKeyDown);
	$('#cancel').click(onBackKeyDown);
}
function onBackKeyDown() {
	if (localStorage.getItem('layout') == 2) {
		window.location = "layout2.html";
	} else {
		window.location = "layout1.html";
	}
}