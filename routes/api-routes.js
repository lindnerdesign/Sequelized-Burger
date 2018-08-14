// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.burgers.findAll({

    }).then(function(cb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(cb);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Post.findAll({
      category: req.params.category

    }).then(function(cb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(cb);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Post.findOne({
      where: {
      id: req.params.id,
      }
    }).then(function(cb) {
      // We have access to the todos as an argument inside of the callback function
      res.json(cb);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category

    }).then(function(cb) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(cb);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(cb) {
      res.json(cb);
    });

  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Post.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(cb) {
      res.json(cb);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};