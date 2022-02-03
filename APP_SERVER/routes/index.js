var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.index );

const ctrlFood = require('../controllers/food');
/* GET food page. */
router.get('/favourite', ctrlFood.favouriteFood);
router.get('/list', ctrlFood.foodList);

module.exports = router;






