var express = require('express');
var router = express.Router();
let formsCtrl = require('../controllers/forms')

/* GET home page. */
router.get('/', formsCtrl.formFunc);
router.post("/posts/", formsCtrl.updateFunc)

module.exports = router;
