
function getPortfolioEntry(link){
	var request = new XMLHttpRequest();
	request.open('GET', link, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var original = document.getElementById('portfolioEntry');
			original.parentNode.removeChild(original);
			var resp = request.responseText;
			var container = document.implementation.createHTMLDocument().documentElement;
			container.innerHTML = resp;
			var payload = container.querySelector('#portfolioEntry');
			document.querySelector('#siteHeader').insertAdjacentHTML('afterend', payload.outerHTML);
			attachGetPortfolioEntry();
			scrollToTop(1000);
			history.pushState(null, null, request.responseURL);
		} 
		else {
			console.log('balls');
		}
	};
	request.onerror = function() {
		console.log(requst);
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
	},15);
}