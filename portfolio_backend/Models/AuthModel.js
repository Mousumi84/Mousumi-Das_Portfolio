const db = require('../db');


const insertUserModel = ({name, email}) => {
    return new Promise((resolve,reject) => {
        //console.log(name,email);

        const sql = "INSERT INTO ViewerMD (name, email) VALUES (?, ?)";
        db.query(sql, [name, email], (err, result) => {
            if(err) {
                console.log("error ln 28", err)
                reject({ status: 500, message: "Failed to insert user", error: err });
            } else {
                const userId = result.insertId;
                const sql = "SELECT * FROM ViewerMD WHERE id = ?";
                db.query(sql,userId,(err,result) => {
                    if(err) {
                        console.log("error ln 28", err)
                        reject({ status: 500, message: "Failed to get viwer details", error: err });
                    } else {
                        resolve(result);
                    }
                })
            }
        });
    });
}


const tokenBacklistedModel = ({jwtToken}) => {
    return new Promise((resolve,reject) => {
    
        if(jwtToken) {
            const sql = "INSERT INTO blacklistedTokens (token) VALUES (?)";
            db.query(sql, [jwtToken], (err, result) => {
                console.log("token",err,result)
                if(err) {
                    if (err.code === "ER_DUP_ENTRY") {
                        reject({ status: 409, message: "Token already blacklisted"});
                    }
            
                    reject({ status: 500, message: "Database query failed"});
                } else {
                    resolve(result);
                }
            });
        }
    });
}


module.exports = { insertUserModel, tokenBacklistedModel };