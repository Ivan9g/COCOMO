var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('basic')
})

router.post('/', function(req , res){
  var i = req.body.indity
  var a = [2.4, 3.0, 3.6]
  var b = [1.05, 1.12, 1.20]
  var c = [2.5, 2.5, 2.5]
  var d = [0.38, 0.35, 0.32]
  //size - line of code
  var size = req.body.size
  //pm - people x mounth
  var pm = a[i] * Math.pow(size, b[i])
  //tm - time at mounth
  var tm = c[i] * Math.pow(pm, d[i])

console.log(tm);
  res.send(`${tm}`);
})

module.exports = router
