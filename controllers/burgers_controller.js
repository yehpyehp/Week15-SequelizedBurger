/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	return models.burger.findAll()
  .then(function(burgers) {
    return res.render('index', {burgers: burgers});
  })
});


router.post('/create', function (req, res) {
  // SOLUTION:
  // =========
  // use the Cat model to create a cat based on what's
  // passed in req.body (name, sleepy, user_id)
  models.burger.create({
    burger_name: req.body.name,
    devoured: req.body.devoured,
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

router.put('/update/:id', function (req, res) {
	models.burger.update({
    	devoured: req.body.devoured
  	},{
    where: { id : req.params.id }
  	})
	.then(function (result) {
    	res.redirect('/');
  	}, function(rejectedPromiseError){

  	});
});


router.delete('/delete/:id', function (req, res) {
	 models.burger.destroy({
    where: {
      id: req.params.id
    }
  })
  // connect it to this .then.
  .then(function() {
    res.redirect('/');
  });

});

module.exports = router;
