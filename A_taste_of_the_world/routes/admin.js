const express = require("express");
const router = new express.Router();

// router.use((req, res, next) => {
//   if (req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });

//MODEL
const Recipe = require("../models/Recipe");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET see-more */
router.get("/see-more", (req, res, next) => {
  res.render("see-more");
});

/* GET add recipe page */
router.get("/add-recipies", (req, res, next) => {
  res.render("add-recipies");
});

router.post("/add-recipes", (req, res) => {
  const { Name, Description, Ingrédients, image } = req.body;
  Recipe.create({
    Name,
    Description,
    Ingrédients,
    image
  })
    .then(recipe => {
      res.redirect("/index");
      // res.render("recipe", { recipe });
    })
    .catch(err => {
      res.redirect("/");
    });
});

/* GET Manage recipies */
router.get("/manage-recipies", (req, res, next) => {
  Recipe.find().then(recipe => {
    res.render("manage-recipies", { recipe });
  });
});

//  EDIT recipes
router.post("/recipe-edit/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.render("recipe-edit", { recipe });
    })
    .catch(err => {
      res.redirect("/manage-recipes");
    });
});

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
