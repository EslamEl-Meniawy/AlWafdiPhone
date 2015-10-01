var titles = [], dates = [], images = [], details = [], links = [], checked = [];
// Change 14 to 15
for (var i = 0; i < 14; i++) {
	titles[i] = [];
	dates[i] = [];
	images[i] = [];
	details[i] = [];
	links[i] = [];
}
if (localStorage.getItem('runned') == null) {
	localStorage.setItem('titles', JSON.stringify(titles));
	localStorage.setItem('dates', JSON.stringify(dates));
	localStorage.setItem('images', JSON.stringify(images));
	localStorage.setItem('details', JSON.stringify(details));
	localStorage.setItem('links', JSON.stringify(links));
	checked[0] = 1;
	// Change 14 to 15
	for (var i = 1; i < 14; i++) {
		if (i < 6) {
			checked[i] = 1;
		} else {
			checked[i] = 0;
		}
	}
	localStorage.setItem('checked', JSON.stringify(checked));
	localStorage.setItem('layout', 1);
	localStorage.setItem('urgentpop', 0);
	localStorage.setItem('runned', '1');
}
if (localStorage.getItem('layout') == 2) {
	window.location = "layout2.html";
} else {
	window.location = "layout1.html";
}