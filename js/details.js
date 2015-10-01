var slider = parseInt(GetDataValue('slider'));
var slide = parseInt(GetDataValue('id'));
//var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0642\u0627\u0644\u0627\u062a \u0631\u0623\u064a', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var titles = JSON.parse(localStorage.getItem('titles')), dates = JSON.parse(localStorage.getItem('dates')), images = JSON.parse(localStorage.getItem('images')), details = JSON.parse(localStorage.getItem('details')), links = JSON.parse(localStorage.getItem('links')), swipers = [];
var connected, pages, ad1 = '', ad2 = '';
$('#ind14').css('margin-right', '0px');
if ($(window).width() <= 320) {
	for (var i = 0; i < 15; i++) {
		$('#ind' + i).css('width', '8px');
		$('#ind' + i).css('height', '8px');
		$('#ind' + i).css('margin-right', '3px');
	}
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	$('#back').click(onBackKeyDown);
	document.addEventListener("backbutton", onBackKeyDown, false);
	$('#cattitle').html(sections[slider]);
	for (var i = 0;i < 15;i++) {
		document.getElementById("ind" + i).className = "inactive";
		if(i == (14 - slide)) {
			document.getElementById("ind" + i).className = "active";
		}
	}
	$(window).on('resize',function(){
		fixPagesHeight();
	});
	fixPagesHeight();
	pages = $('.swiper-pages').swiper({
		onSlideChangeEnd: function() {
			for (var i = 0;i < 15;i++) {
				document.getElementById("ind" + i).className = "inactive";
				if(i == pages.activeIndex) {
					document.getElementById("ind" + i).className = "active";
				}
				$('#ad-' + i + '-' + 0).html('');
				$('#ad-' + i + '-' + 1).html('');
			}
			$('#ad-' + (14 - pages.activeIndex) + '-' + 0).html(ad1);
			$('#ad-' + (14 - pages.activeIndex) + '-' + 1).html(ad2);
			swipers[14 - pages.activeIndex].reInit();
		}
	});
	pages.swipeTo((14 - slide), 1);
	fillData(0);
	//loadAD();
}
function fixPagesHeight() {
	$('.swiper-pages').css({
		height: $(window).height()-$('.head').height()-$('.sectitind').height()
	});
}
function onBackKeyDown() {
	window.history.back();
}
function OpenLink(index) {
	window.open(links[slider][index], '_system');
}
function shareLink(index) {
	window.plugins.socialsharing.share(null, null, null, links[slider][index]);
}
function commentClick(index) {
	window.location = "comments.html?slider=" + slider + "&id=" + index;
}
function GetDataValue(VarSearch) {
	var SearchString = window.location.search.substring(1);
	var VariableArray = SearchString.split('&');
	for (var i = 0; i < VariableArray.length; i++) {
		var KeyValuePair = VariableArray[i].split('=');
		if (KeyValuePair[0] == VarSearch) {
			return KeyValuePair[1];
		}
	}
}
function fillData(i) {
	if (i < 15) {
		document.getElementById('title-' + i).innerHTML = titles[slider][i];
		document.getElementById('date-' + i).innerHTML = dates[slider][i];
		$('#image-' + i).attr("src", images[slider][i]);
		var description = details[slider][i];
		var ytre = /*/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig *//((https?:\/\/)?(www\.)?youtube\S+)/g;
		var resultArray = description.match(ytre);
		if (resultArray != null) {
			for (var j = 0; j < resultArray.length; j++) {
				description = description.replace(resultArray[j], '<div class="video-container"><div class="vendor"><iframe width="420" height="315" src="' + resultArray[j] + '" frameborder="0" allowfullscreen></iframe></div></div>');
			}
			document.getElementById('details-' + i).innerHTML = description;
			$(".video-container").fitVids();
		} else {
			document.getElementById('details-' + i).innerHTML = details[slider][i];
		}
		swipers[i] = $('#scroll-container-' + i).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true
		});
	}
	i++;
	if (i < titles[slider].length) {
		fillData(i);
	}
	$('#loading').hide();
}
function checkConnection() {
	var networkState = navigator.network.connection.type;
	if (networkState == Connection.NONE) {
		connected = 0;
	} else {
		connected = 1;
	}
}
function loadAD() {
	checkConnection();
	if (connected == 1) {
		$.ajax({
			type : 'GET',
			url : 'http://192.168.1.115/ad/adTop.txt'
		}).done(function(response) {
			ad1 = '<br>' + response + '<br>';
			$('#ad-' + (14 - pages.activeIndex) + '-' + 0).html(ad1);
			swipers[14 - pages.activeIndex].reInit();
		});
		$.ajax({
			type : 'GET',
			url : 'http://192.168.1.115/ad/adBottom.txt'
		}).done(function(response) {
			ad2 = '<br>' + response + '<br>';
			$('#ad-' + (14 - pages.activeIndex) + '-' + 1).html(ad2);
			swipers[14 - pages.activeIndex].reInit();
		});
	}
}