const express = require("express");
const router = new express.Router();
const Recipe = require("../models/Recipe.js");

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

router.get("/recipe-add", (req, res) => {
  console.log(req.body);
  res.render("add_recipe");
});

router.post("/recipe-add", (req, res) => {
  const { Name, Description, Ingrédients, image } = req.body;
  Recipe.create({
    Name,
    Description,
    Ingrédients,
    image
  })
    .then(recipe => {
      res.redirect("/");
      res.render("recipe", { recipe });
    })
    .catch(err => {
      res.redirect("/");
    });
});
