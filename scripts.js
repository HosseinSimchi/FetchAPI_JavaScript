
// const moviesList = [];

// const getMovies = async () => {
//   let page = 1;
//   let API_KEY = 'a7e684d8'
//   while (page <= 3) {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=*&type=movie&page=${page}`
//     );
//     const movies = await res.json();
//     movies.Search.forEach((movie) => moviesList.push(movie));
//     page++;
//   }
//   console.log({ moviesList });
// };

// getMovies();
// api url
const api_url =
	//"https://www.omdbapi.com/?i=tt3896198&apikey=a7e684d8";
    "http://www.omdbapi.com/?apikey=a7e684d8&s=*&page=1"

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
    console.log(data);
}

getapi(api_url)





