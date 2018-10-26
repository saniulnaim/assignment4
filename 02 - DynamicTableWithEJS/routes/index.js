var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let studentArray = [
    { id: 1, name: "A", address: "AAddress", roll: "101", group: "science" },
    { id: 2, name: "B", address: "BAddress", roll: "102", group: "Arts" },
    { id: 3, name: "C", address: "CAddress", roll: "103", group: "science" },
    { id: 3, name: "D", address: "DAddress", roll: "104", group: "Arts" },
    { id: 3, name: "E", address: "EAddress", roll: "105", group: "Arts" },
    { id: 3, name: "F", address: "FAddress", roll: "106", group: "science" }
  ];
 
   

  res.render('index', { title: 'Express ejx', studentArray : studentArray });
});

module.exports = router;
