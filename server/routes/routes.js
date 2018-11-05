//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Device = require('../../models/device');
var Passport = require('../../models/passport');
var Verification = require('../../models/verification');
var Repair = require('../../models/repair'); 

router.get('/', function(req, res){
  res.render('index')
});
router.route('/insert')
.post(function(req,res) {
 var device = new Device({
   title: req.body.title,
   type: req.body.type,
   class: req.body.class,
   measureKind: req.body.measureKind,
   scope: req.body.scope,
   location: req.body.location,
   status: req.body.status,
   comment: req.body.comment
 });
device.save(function(err) {
      if (err)
        res.send(err);
      var passport = new Passport({
        device: device._id,
        serial_number: req.body.serial_number,
        passport_number: req.body.passport_number,
        inventory_number: req.body.inventory_number,
        stock_number: req.body.stock_number,
        maker: req.body.maker,
        barcode: req.body.barcode,
        initial_cost: req.body.initial_cost,
        construction_date: req.body.construction_date,
        start_date: req.body.start_date,
        change_data: req.body.change_data
      });
      var verification = new Verification({
        device: device._id,
        last_verif_date: req.body.last_verif_date,
        verif_period: req.body.verif_period,
        next_verif_date: req.body.next_verif_date,
        left_until: req.body.left_until,
        verif_cost: req.body.verif_cost,
        verif_location: req.body.verif_location,
        verif_unit_code: req.body.verif_unit_code,
        verif_type: req.body.verif_type,
        verif_metodology: req.body.verif_metodology,
        verif_officer_name: req.body.verif_officer_name,
        conclusion: req.body.conclusion,
        report_number: req.body.report_number,
        mark_type: req.body.mark_type,
        mark_number: req.body.mark_number
      });
      var repair = new Repair({
        device: device._id,
        reason_for_repair: req.body.reason_for_repair,
        repair_date: req.body.repair_date,
        repair_address: req.body.repair_address,
        repair_cost: req.body.repair_cost,
        short_description: req.body.short_description
      });
      
      passport.save(function(err) {
        if(err) res.send(err);
      })
      verification.save(function(err) {
        if(err) res.send(err);
      })
      repair.save(function(err) {
        if(err) res.send(err);
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
 
 Device.find().exec(function(err, so) {
   if(err)
    res.send(err);
    res.json(so);
 });
});

 module.exports = router;