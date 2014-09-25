function getImages() {
	addImages("games",3)
	addImages("interactive",1)
	addImages("mobile",1)		
};
	
function addImages(media,totalImg) {		
	for (var imgCounter = 1; imgCounter <= totalImg; imgCounter++){			
		var img = document.createElement("img");	
		img.src = "img/" + media + "/" + imgCounter + ".jpg";
		
		var link = document.createElement('a'); // create the link
		link.setAttribute('href', "img/" + media + "/" + imgCounter + ".php");
		link.target = "_blank";

		link.appendChild(img);
		document.getElementById(media).appendChild(link);
		//document.getElementById(media).appendChild(img);
	}			
};