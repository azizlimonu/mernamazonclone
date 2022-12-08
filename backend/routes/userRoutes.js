const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken');
// const jwt = require('jsonwebtoken');

// signin user method post
router.post('/signin', expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validity = await bcrypt.compareSync(req.body.password, user.password);
      if (validity) {
        res.status(200).send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      }
      return;
    }
    res.status(401).send({ message: 'Invalid email or password' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}));

module.exports = router;


