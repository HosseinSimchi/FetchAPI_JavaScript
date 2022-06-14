var url = 'https://www.omdbapi.com/?i=tt3896198&apikey=a7e684d8';

let response = fetch(url);
fetch(url)
    .then(response => {
        console.log(response.json());
    })
    .catch(error => {
        console.log(error);
    });



