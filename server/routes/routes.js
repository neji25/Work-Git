//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Expense = require('../../models/device');
var Passport = require('../../models/passport');
router.get('/', function(req, res){
  res.render('index')
});
router.route('/insert')
.post(function(req,res) {
 var expense = new Expense();
  expense.title = req.body.title;
  expense.typeSO = req.body.typeSO;
  expense.classSO = req.body.classSO;
  expense.scope = req.body.scope;
expense.save(function(err) {
      if (err)
        res.send(err);
      var passport = new Passport({
        _device: expense._id,
        maker: req.body.maker,
        number: req.body.number
      })
      res.send('SO successfully added!');
  });
})
router.route('/update')
.post(function(req, res) {
 const doc = {
     description: req.body.description,
     amount: req.body.amount,
     month: req.body.month,
     year: req.body.year
 };
 console.log(doc);
  Expense.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Expense successfully updated!');
  });
});
router.get('/delete', function(req, res){
 var id = req.query.id;
 Expense.find({_id: id}).remove().exec(function(err, expense) {
  if(err)
   res.send(err)
  res.send('Expense successfully deleted!');
 })
});
router.get('/getAll', function(req, res) {
 
 Expense.find().exec(function(err, so) {
   if(err)
    res.send(err);
    res.json(so);
 })
});

 module.exports = router;