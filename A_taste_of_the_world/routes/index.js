const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

const Recipe = require("../models/Recipe.js");

/* GET home page */
// router.get("/", (req, res, next) => {
//   var q = req.query.q;
//   Recipe.find(
//     {
//       $text: { $search: q }
//     },
//     {
//       _id: 0,
//       __v: 0
//     },
//     function(err, data) {
//       res.json(data);
//     }
//   )
//     .then(recipes => console.log(recipes))
//     .catch(e => console.log(e));
// });

//   recipeModel.createIndex({
//   Name: "text",
//   Region: "text",
//   image: "text"
// });

// const Recipe = mongoose.model("Recipe", recipeModel);

// Recipe.find({
//   $text: { $search: term }
// })
//   .then(recipes => console.log(recipes))
//   .catch(e => console.log(e));

router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET home page */
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET home page */
router.get("/favourite-foods", (req, res, next) => {
  res.render("favourite-foods");
});
module.exports = router;

var cookie = new Recipe({
  Name: "Cookie",
  Region: "America",
  Description: "Delicious cookies",
  Ingrédients:
    "1 cup salted butter softened 1 cup white (granulated) sugar 1 cup light brown sugar packed 2 tsp pure vanilla extract 2 large eggs 3 cups all-purpose flour 1 tsp baking soda ½ tsp baking powd"
});

cookie
  .save()
  .then(user => {
    console.log("cookie was created");
  })
  .catch(err => {
    console.log("An error occured", err);
  });

module.exports = router;
