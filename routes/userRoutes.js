// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/add', userController.add);