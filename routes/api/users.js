const express = require("express");
const router=express.Router();

// @access Public
// @route GET api/users/test
// @desc Tests users route
router.get("/test", (req,res)=>{res.json({msg:"Users works"})});

module.exports=router;