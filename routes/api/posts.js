const express = require("express");
const router=express.Router();

// @access Public
// @route GET api/posts/test
// @desc Tests posts route
router.get("/test", (req,res)=>{res.json({msg:"Posts works"})});

module.exports=router;