const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema

const RecipeSchema = new Schema({
  Name: { type: String, required: true },
  Region: {
    type: String,
    required: true,
    default: "Undefined"
  },
  Description: {
    type: String,
    required: true
  },
  Ingrédients: {
    type: Array,
    required: false
  },
  image: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/I/61u91QNXueL._UX395_.jpg"
  }
});

const recipeModel = mongoose.model("recipeModel", RecipeSchema);
module.exports = recipeModel;
