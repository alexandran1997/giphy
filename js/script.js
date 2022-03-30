let giphyAPIurl = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$(".search-button").click(function() {
  fetch(giphyAPIurl)
  
    .then(function(response) {
            return response.json();
  })
    
    .then(function(body) {
        console.log(body.data);
  })
  
});
                         
                         