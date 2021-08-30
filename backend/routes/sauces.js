const express = require("express");
const app = require("../app");
const router = express.Router();
const multer = require("../middleware/multer-config");
const path = require("path");

const sauceCtrl = require("../controllers/sauce");

router.get("/", sauceCtrl.getAllSauces);
router.get('/:id', sauceCtrl.getOneSauce);
router.post("/", multer, sauceCtrl.createSauce);
router.put("/:id", sauceCtrl.updateOne)
router.delete("/:id", sauceCtrl.deleteOne);

module.exports = router;