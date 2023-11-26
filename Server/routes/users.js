const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
      // Validate request body
      
      if (!req.body.name || !req.body.email || !req.body.studentNo || !req.body.Branch) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Check for existing user with the same username
      const existingUser = await User.findOne({ studentNo: req.body.studentNo });
  
      if (existingUser) {
        return res.status(400).json('already registered');
      }
  
      
  
      // Create new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        studentNo:req.body.studentNo,
        Branch:req.body.Branch
       
      });
  
      // Save user and return response
      const user = await newUser.save();
      res.status(200).json({ userId: user._id, name: user.name });
    } catch (err) {
      console.error(err); 
      res.status(500).json(err);
    }
  });


  module.exports = router;
  