const APIKEY = "AIzaSyDl3boMxCQe34oJ9IklOMLofi6NmNgf_4U";

function searchByKeyword(keyword) {
  return gapi.client.youtube.search.list({
    part: "snippet",
    maxResults: 25,
    q: keyword
  });
}

function start() {
  console.log("started", gapi);

  gapi.client.setApiKey(APIKEY);
  console.log("before");
  gapi.client.load("youtube", "v3", function() {
    console.log("yo");
    console.log(x);
    const res = searchByKeyword("food");
    console.log(res);
  });
  console.log("after");
}

// document.addEventListener("DOMContentLoaded", start);
// var map = new.google.maps.Map(document.getElementById("map"), {
//     scrollwheel:false,
//   zoom:2
// })

// var unirest = require("unirest");

// unirest
//   .post("https://webknox-recipes.p.rapidapi.com/recipes/cuisine")
//   .header("X-RapidAPI-Host", "webknox-recipes.p.rapidapi.com")
//   .header(
//     "X-RapidAPI-Key",
//     "b9d622cec4msh926bd8894b2d7e2p1b3d0ejsndb07213773ca"
//   )
//   .header("Content-Type", "application/x-www-form-urlencoded")
//   .end(function(result) {
//     console.log(result.status, result.headers, result.body);
//   });
