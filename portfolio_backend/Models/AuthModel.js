const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const ViwerSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    }
},
{
    timestamps: true,
}
);

const ViwerModel = mongoose.model("Viwer",ViwerSchema);


const storeViwerInfoModel = ({name, email}) => {
    return new Promise(async (resolve,reject) => {
        console.log(name,email);

        const ViwerObj=new ViwerModel({
            name : name,
            email : email,
        });

        try {
            const response=await ViwerObj.save();
            resolve(response);
        } catch (error) {
            console.log("error",error)
            reject(error);
        }

    });
}


module.exports = { storeViwerInfoModel };





// const sql = "INSERT INTO ViwerMD (name, email) VALUES (?, ?)";
        // db.query(sql, [name, email], (err, result) => {
        //     if(err) {
        //         console.log("error ln 28", err)
        //         reject({ status: 500, message: "Failed to insert user", error: err });
        //     } else {
        //         const userId = result.insertId;
        //         const sql = "SELECT * FROM ViwerMD WHERE id = ?";
        //         db.query(sql,userId,(err,result) => {
        //             if(err) {
        //                 console.log("error ln 28", err)
        //                 reject({ status: 500, message: "Failed to get viwer details", error: err });
        //             } else {
        //                 resolve(result);
        //             }
        //         })
        //     }
        // });