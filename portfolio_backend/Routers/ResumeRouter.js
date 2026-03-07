const express = require("express");
const { saveResume } = require("../Controllers/ResumeController");

const ResumeRouter = express.Router();

ResumeRouter.post("/saveResume", saveResume);

module.exports = ResumeRouter;