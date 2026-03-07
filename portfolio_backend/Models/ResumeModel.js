const mongoose=require("mongoose");

const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    file: {
        // type:String,
        required:true,
    }
});

const ResumeModel = mongoose.model("Resume",ResumeSchema);


const storeResume = ({file}) => {
    return new Promise(async (resolve,reject) => {
        console.log(file);

        const ResumeObj=new ResumeModel({
            file : file,
        });

        try {
            const response=await ResumeObj.save();
            resolve(response);
        } catch (error) {
            console.log("error",error)
            reject(error);
        }

    });
}


module.exports = { storeResume };
