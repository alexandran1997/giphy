let giphyAPIurl="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
console.log(giphyAPIurl);

let userInput=$("input").val(); 
//let newURL= `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
let randNum = Math.floor(Math.random() * 49);


$(".search-button").click(function() {
  fetch(giphyAPIurl)
  fetch(randNum)
  
    .then(function(response) {
            console.log(response);
            return response.json();
    
  })
    
    .then(function(body) {
        console.log(body.data.length);
  })
  
});
             



//$(".search-button").click(function() {     
//fetch(newURL)
  
//  .then(function(response) {
  //          return response.json();
  //.then(function(data)
  
