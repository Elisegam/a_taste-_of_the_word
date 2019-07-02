const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema

const RecipeSchema = new Schema({
  Name: { type: String, required: true, uppercase: Schema.toUpperCase(0) },
  Country: {
    type: Array,
    required: true,
    default: "Undefined",
    enum: ["France", "Espagne", "Angleterre"]
  },
  Description: {
    type: String,
    required: true,
    uppercase: Schema.toUpperCase(0)
  },
  Ingrédients: {
    type: String,
    required: false,
    uppercase: forEach(Schema.toUpperCase(0))
  },
  image: {
    type: String,
    default:
      "https://images-na.ssl-images-amazon.com/images/I/61u91QNXueL._UX395_.jpg"
  }
});

const recipeModel = mongoose.model("recipeModel", RecipeSchema);
module.exports = recipeModel;
