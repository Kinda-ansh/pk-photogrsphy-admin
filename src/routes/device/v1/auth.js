const express = require('express');
const { signUp, loginAdmin } = require('../../../controller/auth/adminAuthController');
// const commonController = require('../../../controller/commonController')
// const { checkAuthenticate , checkRole} = require('../../../middleware/adminAuthenticate')
const router = express.Router()

// router.route('common/create').post(checkAuthenticate, checkRole('master','admin'), commonController.addCommon);
// ======================== || Auth Routes || ====================================

router.route('/admin/signup').post(signUp)
router.route('/admin/login').post(loginAdmin) 


module.exports = router;