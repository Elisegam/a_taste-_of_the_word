require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");
authRoutes = require("./routes/auth-route");
mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/a-taste-of-the-worldt", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
// gui était par ici : ) =>
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");

const index = require("./routes/index");
const admin = require("./routes/admin");

const basePageRouter = require("./routes/index");
const adminRouter = require("./routes/admin");

app.use(index);
app.use(admin);
app.use(authRoutes);
app.use(basePageRouter);
app.use(adminRouter);

module.exports = app;
