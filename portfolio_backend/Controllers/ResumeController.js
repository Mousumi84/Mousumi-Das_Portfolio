const jwt = require("jsonwebtoken");
const { storeResume } = require("../Models/ResumeModel");


const saveResume = async (req, res) => {
  console.log("Save Resume", req.body);
  const { file } = req.body;

  try {
    const userDb = await storeResume({ file });

    return res.send({
      status: 200,
      message: "Resume saved successfully",
    });
  } catch (error) {
    console.log("error",error);
    return res.send({
      status: error.status || 500,
      message: error.sqlMessage || "Internal Server Error",
      error: error.error || error,
    });
  }
};


module.exports = { saveResume };
