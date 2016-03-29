function getPortfolioEntry(link){
	var request = new XMLHttpRequest();
	request.open('GET', link, true);
	request.onloadstart = function(){
		window.setTimeout(function(){
			window.scrollTo(0,0);
		}, 200);
		createLoader();
	}
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			window.setTimeout(function(){
				destroyLoader();
				var original = document.getElementById('portfolioEntry');
				original.parentNode.removeChild(original);
				var resp = request.responseText;
				var container = document.implementation.createHTMLDocument().documentElement;
				container.innerHTML = resp;
				var payload = container.querySelector('#portfolioEntry');
				document.querySelector('#siteHeader').insertAdjacentHTML('afterend', payload.outerHTML);
				attachGetPortfolioEntry();
				history.pushState(null, null, request.responseURL);
			}, 200);
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
function createLoader(){
	var svg = document.createElement('svg');
	var circle = document.createElement('circle');
	var background = document.createElement('div');
	var container = document.createElement('div');
	svg.setAttribute('class', 'svg');
	svg.setAttribute('width', '200');
	svg.setAttribute('height', '200');
	circle.setAttribute('cx', '100');
	circle.setAttribute('cy', '100');
	circle.setAttribute('r', '50');
	background.setAttribute('class', '--modal-background');
	container.setAttribute('class', 'modal');
	svg.innerHTML = circle.outerHTML;
	background.innerHTML = svg.outerHTML;
	container.innerHTML = background.outerHTML;
	document.querySelector('#siteHeader').insertAdjacentHTML('afterend', container.outerHTML);
	window.setTimeout(function(){
		document.querySelector('.modal').classList.add('fadein');
	}, 1);
	window.setTimeout(function(){
		var domBackground = document.querySelector('.--modal-background');
		if(domBackground){
			domBackground.classList.add('fadein');
		}
	}, 1000);
}
function destroyLoader(){
	modal = document.querySelector('.modal');
	document.querySelector('.modal').classList.remove('fadein');
	window.setTimeout(function(){
		modal.parentNode.removeChild(modal);
	}, 200);
}
function attachGetPortfolioEntry()
{
	var btn = document.querySelector('.--button-async');
	if(btn){
		btn.addEventListener('click', function(e){
			e.preventDefault();
			var link = this.href;
			getPortfolioEntry(link);
		}, false);
	}
}
attachGetPortfolioEntry();