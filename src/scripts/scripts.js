
function getPortfolioEntry(link){
	var request = new XMLHttpRequest();
	request.open('GET', link, true);
	request.onloadstart = function(){
		console.log('loader init');
		createLoader();
	}
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			destroyLoader();
			var original = document.getElementById('portfolioEntry');
			original.parentNode.removeChild(original);
			var resp = request.responseText;
			var container = document.implementation.createHTMLDocument().documentElement;
			container.innerHTML = resp;
			var payload = container.querySelector('#portfolioEntry');
			document.querySelector('#siteHeader').insertAdjacentHTML('afterend', payload.outerHTML);
			attachGetPortfolioEntry();
			//scrollToTop(1000);
			window.scrollTo(0, 0);
			history.pushState(null, null, request.responseURL);
		} 
		else {
			console.log('balls');
		}
	};
	request.onerror = function() {
		console.log(request);
	};
	request.send();
}

function attachGetPortfolioEntry()
{
	var btn = document.querySelector('.button');
	btn.addEventListener('click', function(e){
		e.preventDefault();
		var link = this.href;
		getPortfolioEntry(link);
	}, false);
}
attachGetPortfolioEntry();

function scrollToTop(scrollDuration) {
	var scrollStep = -window.scrollY / (scrollDuration / 15),
	scrollInterval = setInterval(function(){
		if ( window.scrollY != 0 ) {
			window.scrollBy( 0, scrollStep );
		}
		else clearInterval(scrollInterval); 
	});
}
function createLoader(){
	var svg = document.createElement('svg');
	var circle = document.createElement('circle');
	var container = document.createElement('div');
	svg.setAttribute('class', 'svg');
	svg.setAttribute('width', '200');
	svg.setAttribute('height', '200');
	circle.setAttribute('cx', '100');
	circle.setAttribute('cy', '100');
	circle.setAttribute('r', '50');
	container.setAttribute('class', 'modal');
	svg.innerHTML = circle.outerHTML;
	container.innerHTML = svg.outerHTML;
	document.querySelector('#siteHeader').insertAdjacentHTML('afterend', container.outerHTML);
	window.setTimeout(function(){
		document.querySelector('.modal').classList.add('modalfade');
	}, 200);
}
function destroyLoader(){
	modal = document.querySelector('.modal');
	document.querySelector('.modal').classList.remove('modalfade');
	window.setTimeout(function(){
		modal.parentNode.removeChild(modal);
	}, 200);
}