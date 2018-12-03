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

  var passport = new Passport();
  var verification = new Verification();
  var repair = new Repair();

 var device = new Device({
   title: req.body.title,
   type: req.body.type,
   class: req.body.class,
   measureKind: req.body.measureKind,
   scope: req.body.scope,
   location: req.body.location,
   status: req.body.status,
   comment: req.body.comment,
   passport: passport._id,
   verification: verification._id,
   repair: repair._id
 });
device.save(function(err) {
      if (err)
        res.send(err);

        passport.device = device._id;
        passport.serial_number = req.body.serial_number;
        passport.passport_number = req.body.passport_number;
        passport.inventory_number = req.body.inventory_number;
        passport.stock_number = req.body.stock_number;
        passport.maker = req.body.maker;
        passport.barcode = req.body.barcode;
        passport.initial_cost = req.body.initial_cost;
        passport.construction_date = req.body.construction_date;
        passport.start_date = req.body.start_date;
        passport.change_data = req.body.change_date;
      
      
        verification.device = device._id,
        verification.last_verif_date = req.body.last_verif_date,
        verification.verif_period = req.body.verif_period,
        verification.next_verif_date = req.body.next_verif_date,
        verification.left_until = req.body.left_until,
        verification.verif_cost = req.body.verif_cost,
        verification.verif_location = req.body.verif_location,
        verification.verif_unit_code = req.body.verif_unit_code,
        verification.verif_type = req.body.verif_type,
        verification.verif_metodology = req.body.verif_metodology,
        verification.verif_officer_name = req.body.verif_officer_name,
        verification.conclusion = req.body.conclusion,
        verification.report_number = req.body.report_number,
        verification.mark_type = req.body.mark_type,
        verification.mark_number = req.body.mark_number
      
      
        repair.device = device._id
        repair.reason_for_repair = req.body.reason_for_repair
        repair.repair_date = req.body.repair_date
        repair.repair_address = req.body.repair_address
        repair.repair_cost = req.body.repair_cost
        repair.short_description = req.body.short_description
      

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
 var titleRec = req.query.title;
 if(titleRec) {
  Device.find({title: titleRec}).populate(['passport', 'verification', 'repair']).exec(function(err, so) {
    if(err)
     res.send(err);
     res.json(so);
  })
 } else {
  Device.find({}).populate(['passport', 'verification', 'repair']).exec(function(err, so) {
    if(err)
     res.send(err);
     res.json(so);
 })
 
 }
});


 module.exports = router;