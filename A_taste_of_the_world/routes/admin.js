const express = require("express");
const router = express.Router();

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

/* GET Manage recipies */
router.get("/manage-recipies", (req, res, next) => {
  res.render("manage-recipies");
});

//  EDIT recipes
router.post("/recipe-edit/:id", (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => {
      res.render("recipe_edit", { recipe });
      console.log(req);
    })
    .catch(err => {
      console.log("error");
    });
});

// DELETE recipes
router.get("/recipe-delete/:id", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id, req.body)
    .then(recipe => {
      res.redirect("/manage-recipies");
      console.log(req);
    })
    .catch(err => {
      console.log("error");
    });
});

module.exports = router;
