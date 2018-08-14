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

// FindAll
app.get("/", function(req, res) {
 db.burgers.findAll({})

 .then(function(cb) { 
  res.json(cb);
 });
});

// Create
app.post("/api/burgers", function(req, res) {
  console.log(req.body);

  db.burgers.create ({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured

  }).then(function(cb) {
    res.json(cb);
  });
});

// Update
app.put("/api/burgers/:id", function(req, res) {
  console.log(req.body);
  db.burgers.update(req.body,
    {
    where: {
      id: req.body.id
    }
  })
    .then(function(cb) {
      res.json(cb);
    });
});

// Destroy
app.delete("/api/burgers/:id", function(req, res) {
  db.burgers.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(cb) {
      res.json(cb);
    });
});
};
