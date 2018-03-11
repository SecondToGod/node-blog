const express = require('express');
const router = express.Router();

const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/',checkNotLogin, function(req,res,next){
  res.send('signup page');
});
router.post('/',checkNotLogin, function(req,res,next){
  res.send('signup');
});

module.exports = router;