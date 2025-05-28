const express = require("express");
const router = express.Router();


const {getUsers, usersData} = require("../controllers/userController");


router.get('/users', getUsers);

router.get('/usersData', usersData);


module.exports = router;