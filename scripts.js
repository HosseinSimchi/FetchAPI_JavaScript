var list_Movies = [];
var counter = 0;

function gettingMovies(){
	async function getapi(url) {
		const response = await fetch(url);
		var data = await response.json();
		for (var i = 0; i < 10; i++) {
			list_Movies.push(data.Search[i].Title)
		}	
		counter++;
		if (counter == 5){
			var text = " ";
			for (var j = 0; j < list_Movies.length; j++){
				text += (j+1) + " " + list_Movies[j] + "\n";
			}
			document.getElementById("ShowMovies").innerHTML = text;
		}
	}
	for ( let page = 1; page < 6; page++){
		var api_url =
		"http://www.omdbapi.com/?apikey=a7e684d8&s=ins&page=" + `${page}`;
		getapi(api_url)
	}
}






