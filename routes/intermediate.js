var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('intermediate')
})

router.post('/', function(req , res){
  var i = req.body.indity
  var a = [3.2, 3.0, 2.8]
  var b = [1.05, 1.12, 1.20]
  var cd = [
  	  req.body.rsr,
  	  req.body.sad,
  	  req.body.ctp,
  	  req.body.rtpc,
  	  req.body.mc,
  	  req.body.vvme,
  	  req.body.rtt,
  	  req.body.ac,
  	  req.body.sec,
  	  req.body.ae,
  	  req.body.vme,
  	  req.body.ple,
  	  req.body.ust,
  	  req.body.asem,
  	  req.body.rds
  ]
  //eaf - effort adjustment
  for (var i = 0; i < cd.length; i++) {
    var eaf = eaf * cd[i]
  }
  //size - line of code
  var size = req.body.size
  //pm - people x mounth
  var pm = eaf * a[i] * pow(size, b[i])

  console.log(tm);
})

module.exports = router
