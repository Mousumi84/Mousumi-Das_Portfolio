const express = require("express");
require('dotenv').config();
const cors = require("cors");

//Files-Import----------------------------
const db = require("./db");
const AuthRouter = require("./Routers/AuthRouter");


//Constants-------------------------------
const app = express();
const PORT = process.env.PORT || 5050;


//Middleware-------------------------------
app.use(cors({
    origin: "https://mousumi-das-portfolio-zeta.vercel.app",
    credentials: true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//Routers----------------------------------
app.get("/", (req, res) => {
    const sql = `CREATE TABLE IF NOT EXISTS ViewerMD (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(60) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    
    db.query(sql, (er) => {
        if(er) return res.status(500).send(er);
    
        return res.send({ message: "Successfully created table"});
    });
});

app.use('/auth',AuthRouter);


//Listener---------------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});