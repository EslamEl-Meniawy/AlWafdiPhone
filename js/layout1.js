//var urls = ['http://m.alwafd.org/mobilefeed/important', 'http://m.alwafd.org/mobilefeed/9', 'http://m.alwafd.org/mobilefeed/20', 'http://m.alwafd.org/mobilefeed/26', 'http://m.alwafd.org/mobilefeed/44', 'http://m.alwafd.org/mobilefeed/666', 'http://m.alwafd.org/mobilefeed/533', 'http://m.alwafd.org/mobilefeed/29', 'http://m.alwafd.org/mobilefeed/18', 'http://m.alwafd.org/mobilefeed/559', 'http://m.alwafd.org/mobilefeed/16', 'http://m.alwafd.org/mobilefeed/19', 'http://m.alwafd.org/mobilefeed/82', 'http://m.alwafd.org/mobilefeed/7', 'http://m.alwafd.org/mobilefeed/660'];
var urls = ['http://m.alwafd.org/mobilefeed/important', 'http://m.alwafd.org/mobilefeed/9', 'http://m.alwafd.org/mobilefeed/20', 'http://m.alwafd.org/mobilefeed/26', 'http://m.alwafd.org/mobilefeed/44', 'http://m.alwafd.org/mobilefeed/666', 'http://m.alwafd.org/mobilefeed/533', 'http://m.alwafd.org/mobilefeed/29', 'http://m.alwafd.org/mobilefeed/18', 'http://m.alwafd.org/mobilefeed/559', 'http://m.alwafd.org/mobilefeed/16', 'http://m.alwafd.org/mobilefeed/19', 'http://m.alwafd.org/mobilefeed/82', 'http://m.alwafd.org/mobilefeed/660'];
var urgentPopURL = "http://m.alwafd.org/mobilefeed/urgent";
//var sectionsTitles = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0642\u0627\u0644\u0627\u062a \u0631\u0623\u064a', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var sectionsTitles = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var categories;
var titles = JSON.parse(localStorage.getItem('titles')), dates = [], images = JSON.parse(localStorage.getItem('images')), details = [], links = [], positions = [], checked = JSON.parse(localStorage.getItem('checked')), sections = [], activesectionsTitles = [];
var connected;
var intervalpop;
var timeout;
var timpTSlide = '<div class="swiper-slide" id="sec{{i}}"><div class="swiper-container scroll-container"><div class="swiper-wrapper"><div class="swiper-slide"><div class="page-inner"><a href="details.html?slider={{i}}&id=0"><div class="image"><img src="img/loading.png" id="sec{{i}}-image-0" /><div class="title titles" id="sec{{i}}-title-0"></div></div></a><div class="twocontainer"><a href="details.html?slider={{i}}&id=2"><div class="two"><img src="img/loading.png" class="images" id="sec{{i}}-image-2" /><div class="twotitle" id="sec{{i}}-title-2"></div></div></a><a href="details.html?slider={{i}}&id=1"><div class="two"><img src="img/loading.png" class="images" id="sec{{i}}-image-1" /><div class="twotitle" id="sec{{i}}-title-1"></div></div></a></div><a href="details.html?slider={{i}}&id=3"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-3" /></div><div class="resttitle" id="sec{{i}}-title-3"></div></div></a><a href="details.html?slider={{i}}&id=4"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-4" /></div><div class="resttitle" id="sec{{i}}-title-4"></div></div></a><a href="details.html?slider={{i}}&id=5"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-5" /></div><div class="resttitle" id="sec{{i}}-title-5"></div></div></a><a href="details.html?slider={{i}}&id=6"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-6" /></div><div class="resttitle" id="sec{{i}}-title-6"></div></div></a><a href="details.html?slider={{i}}&id=7"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-7" /></div><div class="resttitle" id="sec{{i}}-title-7"></div></div></a><a href="details.html?slider={{i}}&id=8"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-8" /></div><div class="resttitle" id="sec{{i}}-title-8"></div></div></a><a href="details.html?slider={{i}}&id=9"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-9" /></div><div class="resttitle" id="sec{{i}}-title-9"></div></div></a><a href="details.html?slider={{i}}&id=10"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-10" /></div><div class="resttitle" id="sec{{i}}-title-10"></div></div></a><a href="details.html?slider={{i}}&id=11"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-11" /></div><div class="resttitle" id="sec{{i}}-title-11"></div></div></a><a href="details.html?slider={{i}}&id=12"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-12" /></div><div class="resttitle" id="sec{{i}}-title-12"></div></div></a><a href="details.html?slider={{i}}&id=13"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-13" /></div><div class="resttitle" id="sec{{i}}-title-13"></div></div></a><a href="details.html?slider={{i}}&id=14"><div class="restofnewsnews"><div class="restofnewsimage"><img src="img/loading.png" id="sec{{i}}-image-14" /></div><div class="resttitle" id="sec{{i}}-title-14"></div></div></a></div></div></div></div></div>';
var activeCount = 0;
var androidversion;
var adUnit = "ca-app-pub-1333731159795332/9163703190";
var adUnitFullScreen = "ca-app-pub-1333731159795332/9163703190";
var isOverlap = false;
var isTest = false;
// Change 14 to 15
for (var i = 0; i < 14; i++) {
	if (checked[i] == 1) {
		$("#slide-append-div").append(timpTSlide.replace(/{{i}}/g, i));
		activeCount += 1;
		positions.push(i);
		sections.push('sec' + i);
		activesectionsTitles.push(sectionsTitles[i]);
	}
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	if (navigator.userAgent.match(/Android/i)) {
		console.log("Android");
		adUnit = "ca-app-pub-1333731159795332/9163703190";
		adUnitFullScreen = "ca-app-pub-1333731159795332/9163703190";
	} else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		console.log("IOS");
		adUnit = "ca-app-pub-1333731159795332/5058549996";
		adUnitFullScreen = "ca-app-pub-1333731159795332/5058549996";
	}
	window.admob.onBannerAdPreloaded = function() {
        window.admob.showBannerAd('top-center', 'SMART_BANNER');
    };
	if (localStorage.getItem('layout1instructions') != 1) {
		$('.instructions').show();
	}
	$('.closesettings').click(function() {
		localStorage.setItem('layout1instructions', 1);
		$('.instructions').hide();
	});
	if (localStorage.getItem('urgentpop') == 1) {
		clearInterval(intervalpop);
		intervalpop = setInterval(getUrgentPop, 5000);
	} else {
		clearInterval(intervalpop);
	}
	$('#refresh').click(refreshData);
	$('#edit').click(editCategories);
	document.addEventListener("backbutton", onBackKeyDown, false);
	$('#urgentpopclose').click(function() {
		clearTimeout(timeout);
		$('#urgentpop').width('0px');
		$('#urgentpop').height('0px');
	});
	var ua = navigator.userAgent;
	if (ua.indexOf("Android") >= 0) {
		androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8));
	}
	activesectionsTitles.reverse();
	$('.sectitle').html(activesectionsTitles[activeCount - 1]);
	$(window).on('resize',function(){
		fixPagesHeight();
	});
	fixPagesHeight();
	var pages = $('.swiper-pages').swiper({
		onTouchEnd: function(){
			$('.sectitle').html(activesectionsTitles[pages.activeIndex]);
		}
	});
	pages.swipeTo(activeCount - 1, 1);
	$('.scroll-container').each(function(){
		$(this).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true
		});
	});
	if (activeCount > 0) {
		fillData(positions[0], 0);
	}
	loadAD();
}
function fixPagesHeight() {
	$('.swiper-pages').css({
		height: $(window).height()-$('.head').height()-$('.sectitle').height()
	});
}
function refreshData() {
	checkConnection();
	if (connected == 1) {
		window.location = "index.html";
	} else {
		if (androidversion <= 2.3) {
			alert('\u0644\u0627\u0020\u064a\u0648\u062c\u062f\u0020\u0627\u062a\u0635\u0627\u0644\u0020\u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a');
		} else {
			navigator.notification.alert('\u0644\u0627\u0020\u064a\u0648\u062c\u062f\u0020\u0627\u062a\u0635\u0627\u0644\u0020\u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
		}
	}
}
function editCategories() {
	window.location = "categories.html";
}
function checkConnection() {
	var networkState = navigator.network.connection.type;
	if (networkState == Connection.NONE) {
		connected = 0;
	} else {
		connected = 1;
	}
}
function doNothing() {}
function onBackKeyDown() {
	var href = window.location.href;
	var page = href.substr(href.lastIndexOf('/') + 1);
	if(page == 'layout1.html' || page == 'index.html') {
		navigator.app.exitApp();
	}
}
function getUrgentPop() {
	checkConnection();
	if (connected == 1) {
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp=new XMLHttpRequest();
		} else {
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET",urgentPopURL,true);
		xmlhttp.onload = function() {
			var doc = this.responseXML.documentElement;
			categories = doc.getElementsByTagName('item');
			if((categories != null) && (categories.length > 0)) {
				try {
					var id = parseInt(categories.item(0).getElementsByTagName('id').item(0).textContent);
					if(localStorage.getItem('urgentpopid') != id) {
						var title = categories.item(0).getElementsByTagName('title').item(0).textContent;
						$('#urgentpoptext').html(title);
						$('#urgentpop').width('240px');
						$('#urgentpop').height('220px');
						localStorage.setItem('urgentpopid', id);
						timeout = setTimeout(function() {
							$('#urgentpop').width('0px');
							$('#urgentpop').height('0px');
						}, 10000);
					}
				} catch(e) {}
			}
		};
		xmlhttp.send();
	}
}
function fillData(i, n) {
	if (checked[i] == 1) {
		for (var j = 0; j < titles[i].length; j++) {
			if (j < 15) {
				$('#sec' + i + '-image-' + j).attr("src", images[i][j]);
				document.getElementById('sec' + i + '-title-' + j).innerHTML = titles[i][j];
			}
		}
		checkConnection();
		if (connected == 1) {
			categories = document.getElementsByTagName('no tag');
			$('#loading').show();
			$('#refresh').hide();
			var xmlhttp;
			if (window.XMLHttpRequest) {
				xmlhttp=new XMLHttpRequest();
			} else {
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET",urls[i],true);
			xmlhttp.onload = function() {
				var doc = this.responseXML.documentElement;
				categories = doc.getElementsByTagName('item');
				if ((categories != null) && (categories.length > 0)) {
					titles[i] = [];
					dates[i] = [];
					images[i] = [];
					details[i] = [];
					links[i] = [];
					try {
						for (var k = 0; k < categories.length; k++) {
							var title = categories.item(k).getElementsByTagName('title').item(0).textContent;
							var time = categories.item(k).getElementsByTagName('pubDate').item(0).textContent;
							time = time.slice(5);
							time = time.substring(0, time.length - 6);
							var bigImage = categories.item(k).getElementsByTagName('enclosure').item(0).getAttribute('url');
							if (bigImage == "http://test.alwafd.org/images/thumbs/513/no_image.png" || bigImage == "http://new.alwafd.org/images/thumbs/513/no_image.png" || bigImage == "http://m.alwafd.org/images/thumbs/513/no_image.png") {
		                        bigImage = 'img/loading.png';
		                    }
							var fullDescription = categories.item(k).getElementsByTagName('description').item(0).textContent;
							var lin = categories.item(k).getElementsByTagName('link').item(0).textContent;
							titles[i][k] = title;
							dates[i][k] = time;
							images[i][k] = bigImage;
							details[i][k] = fullDescription;
							links[i][k] = lin;
							if (k < 15) {
								$('#sec' + i + '-image-' + k).attr("src", bigImage);
								document.getElementById('sec' + i + '-title-' + k).innerHTML = title;
							}
						}
						localStorage.setItem('titles', JSON.stringify(titles));
						localStorage.setItem('dates', JSON.stringify(dates));
						localStorage.setItem('images', JSON.stringify(images));
						localStorage.setItem('details', JSON.stringify(details));
						localStorage.setItem('links', JSON.stringify(links));
						$('#loading').hide();
						$('#refresh').show();
					} catch(e) {
						if (androidversion <= 2.3) {
							alert('\u062d\u062f\u062b \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644\n\u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649');
						} else {
							navigator.notification.alert('\u062d\u062f\u062b \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644\n\u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
						}
						$('#loading').hide();
						$('#refresh').show();
					}
				}
			};
			xmlhttp.send();
		}
		n++;
		if (n < positions.length) {
			fillData(positions[n], n);
		}
	}
}
function loadAD() {
	checkConnection();
	if (connected == 1) {
		/*$.ajax({
			type : 'GET',
			url : 'http://192.168.1.115/ad/ad.json',
			dataType : 'JSON'
		}).done(function(response) {
			if (response.ad == true) {
				window.admob.setUp(adUnit, adUnitFullScreen, isOverlap, isTest);
	    		window.admob.preloadBannerAd();
			}
		});*/
		window.admob.setUp(adUnit, adUnitFullScreen, isOverlap, isTest);
	    window.admob.preloadBannerAd();
	}
}