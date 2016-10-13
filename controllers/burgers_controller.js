/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	models.burger.findAll();
});
// .then(function(burgers) {
//     res.render('burgers/index', {burgers:burgers});
//   });


router.post('/create', function (req, res) {
models.Burger.update(
  {
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});

router.put('/update/:id', function (req, res) {
	models.Burger.update({
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
	 models.Burger.destroy({
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
