//entry point of the routes;
 const router = require('express').Router();
 const homeController  = require('../controllers/home_controller');

 router.get('/',homeController.home);
 router.use('/users',require('./users'));
 module.exports = router;