var express = require('express');
var router = express.Router;

router.use('/', (req, res) => {
  res.send("home page");
})

console.log("route>> index-----------1")
// //router.get('/employee', (req, res) => {
// //    console.log(req.body);
//     res.send("emplo5555555555555555555555555555555555yeee");
//   })

// router.use('/tasks', require('../app/controllers/takscontroller'))

module.exports = router;
