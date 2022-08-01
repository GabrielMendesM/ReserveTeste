const express = require('express');

const countriesController = require('../controllers/countries-controllers');

const router = express.Router();

router.get('/', countriesController.getCountries);

module.exports = router;
