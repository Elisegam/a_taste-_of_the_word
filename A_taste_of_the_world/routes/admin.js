const express = require("express");
const router = express.Router();

/* GET Manage recipies */
router.get("/manage-recipies", (req, res, next) => {
  res.render("manage-recipies");
});

module.exports = router;
