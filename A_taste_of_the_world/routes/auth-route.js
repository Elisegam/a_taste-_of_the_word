const express = require("express");
const authRoutes = new express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// SIGN UP
authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

authRoutes.post("auth/signup", (req, res, next) => {
  console.log(req.body);
  const username = req.body.username;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("auth/signup", {
      message: "Please enter both, username and password to sign up."
    });
    return;
  }
  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", {
          message: "The username already exist."
        });
        return;
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        last_name,
        email,
        password: hashPass
      });
      newUser.save(err => {
        if (err) {
          res.render("auth/signup", { message: "Something went wrong" });
        } else {
          res.redirect("/");
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

// LOG IN
authRoutes.get("/login", (req, res, next) => {
  // console.log(res);
  res.render("auth/login");
});

authRoutes.post("/login", (req, res, next) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  if (userEmail === "" || userPassword === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, mail and password to sign up."
    });
    return;
  }

  User.findOne({ email: userEmail })
    .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(userPassword, user.password)) {
        console.log(user.password);
        console.log(req.session.currentUser);
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});

//LOG OUT
authRoutes.get("/logout", (req, res, next) => {
  req.session.destroy(err => {
    // can't access session here
    res.redirect("/login");
  });
});

module.exports = authRoutes;
