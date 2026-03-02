const express=require("express");
const { viwerlogin } = require("../Controllers/AuthController");
const AuthRouter=express.Router();

AuthRouter.post("/viwerlogin", viwerlogin);

module.exports = AuthRouter;