const jwt = require("jsonwebtoken");
const { dataValidation } = require("../Utils/AuthUtil");
const { insertUserModel } = require("../Models/AuthModel");


const viwerlogin = async (req, res) => {
  console.log("Login", req);
  const { name, email } = req.body;

  //Data Validation
  try {
    await dataValidation({ name, email });
  } catch (error) {
    return res.send({
      status: 400,
      message: error,
    });
  }

  //User registered / not
  try {
    const userDb = await insertUserModel({ name, email});
    const jwtToken = jwt.sign({ data: userDb }, process.env.JWT_SECRET);

    return res.send({
      status: 200,
      message: "Viwer Login Successfully",
      token: jwtToken,
      data: userDb,
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


module.exports = { viwerlogin };
