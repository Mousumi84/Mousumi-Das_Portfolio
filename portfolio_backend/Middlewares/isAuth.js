const jwt = require("jsonwebtoken");
const db = require("../db");

const isAuth = (req,res,next) => {

    const jwtToken = req.headers.authorization;

    if(jwtToken) {
        const sql = "SELECT * FROM blacklistedTokens WHERE token = ?";
        db.query(sql, [jwtToken], (err, result) => {

            if(err) {
                return res.send({ 
                    status:500,
                    message: "Database query failed", 
                    error: err,
                });
            } else if(result.length === 0) {
                const decoded = jwt.verify(jwtToken,process.env.JWT_SECRET);
                req.user=decoded;
                next();
            } else {
                return res.send({ 
                    status:403,
                    message: "Token invalidated",
                });
            }
        });
    }
    else {
        return res.send({
            status:401,
            message:"Session Expired or Unauthorized, Please viwerlogin again",
        });
    }
}

module.exports = isAuth;