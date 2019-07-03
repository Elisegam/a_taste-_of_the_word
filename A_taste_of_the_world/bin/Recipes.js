const mongoose = require("mongoose");
const Movie = require("../models/Recipe");

const dbName = "base-recipes";
mongoose.connect(`mongodb://localhost/${dbName}`);

const recipes = [
  {
    Name: "Cookie",
    Region: "America",
    Description: "Delicious cookies",
    Ingrédients:
      "1 cup salted butter softened 1 cup white (granulated) sugar 1 cup light brown sugar packed 2 tsp pure vanilla extract 2 large eggs 3 cups all-purpose flour 1 tsp baking soda ½ tsp baking powd"
  },
  {
    Name: "Bibimbap",
    Region: "Asia/South-Korea",
    Description: "",
    Ingrédients: [
      "Riz",
      "2 carottes",
      "2 courgettes",
      "200 g de pousses de soja",
      "Jeunes pousses d'épinard",
      "Champignons shiitakés ou de Paris",
      "2 ou 3 gousses d'ail",
      "1 morceau de gingembre râpé"
    ]
  }
];

Recipe.create(recipes, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${recipes.length} recipes`);
  mongoose.connection.close();
});
