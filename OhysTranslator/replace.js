
(function() {
	requestList('https://raw.githubusercontent.com/ohyongslck/annie/master/2018-01');
	requestList('https://raw.githubusercontent.com/ohyongslck/annie/master/2017%404')

	function requestList(url){
		var httpRequest = new XMLHttpRequest();
	    if (!httpRequest) {
	      alert('Cannot create an XMLHTTP instance');
	      return false;
	    }
	    httpRequest.onreadystatechange = parseResult;
	    httpRequest.open('GET', url);
	    httpRequest.send();

	  	function parseResult() {
	    if (httpRequest.readyState === XMLHttpRequest.DONE) {
	      if (httpRequest.status === 200) {
	      	var result = httpRequest.responseText;
	      	var allLines = result.split('\n');
	      	var jpnTitles = [];
	    	var engTitles = [];

	      	for (var i = 0;i<allLines.length;i++){
	      		var line = allLines[i];
	      		var firstSplit = line.split('[');
	      		if (firstSplit.length > 1){
	      			var secondSplit = firstSplit.join('').split(']');
	      			if (secondSplit.length >= 6){
	      				jpnTitles.push(secondSplit[3]);
	      				engTitles.push(secondSplit[4].replace(/\W+/g,''));
	      			}
	      		}
	      	}

	      	var frame = document.getElementsByTagName('frame')[0];
			var innerDocument = frame.contentDocument;
			var listing = innerDocument.getElementById('listing').getElementsByTagName('a');

			for (var i = 0;i<listing.length;i++){
				var anchor = listing[i];
				var anchorTitle = anchor.innerHTML.split(/\]\s/)[1].split(/\s-/)[0];

				var index = engTitles.indexOf(anchorTitle.replace(/\W+/g,'')); 
				if (index >= 0){
					var changedTitle = anchor.innerHTML.replace(anchorTitle,jpnTitles[index]);
					anchor.innerHTML = changedTitle;
				}
							
			}

	      } else {
	        alert('Request failed.');
	      }
	    }
	  	}			    
	}




})();