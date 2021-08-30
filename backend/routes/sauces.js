const express = require("express");
const app = require('../app');
const router = express.Router()

const sauceCtrl = require('../controllers/sauce')

router.get('/', sauceCtrl.getAllSauces)
// router.get("/:id", sauceCtrl.XXX)
router.post("/", sauceCtrl.createSauce)
// router.put("/:id", sauceCtrl.XXX)
// router.delete("/:id", sauceCtrl.XXX)




module.exports = router 