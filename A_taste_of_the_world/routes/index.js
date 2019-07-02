const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

// const restVid=axios.create({
//   baseURL ="https://maps.googleapis.com/maps/api/js?key=YAIzaSyDl3boMxCQe34oJ9IklOMLofi6NmNgf_4UY&callback=initMap"
// })
// function getVidInfo(theName){
//   restVid.get(theName)
//   .then(restfromAPI => {

//     console.log("API response",restfromAPI.data )
//   })
//   .catch(err=>{ console.log("Error is", err)
// })
// }

// document.getElementById("theButton").onclick = function(){
//   const vid = document.getElementById("theInput").value
// getVidInfo(country);
// }
