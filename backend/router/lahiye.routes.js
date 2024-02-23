const express = require('express')
const router = express.Router()
// const tecnikController=require("../controllers/lahiye.controller")
const tex=require("../controllers/lahiye.controller")

router.get("/",tex.getAll)
router.get("/:id",tex.getById)
router.post("/",tex.add)
router.put("/:id",tex.edit)
router.delete("/:id",tex.delete)
module.exports=router