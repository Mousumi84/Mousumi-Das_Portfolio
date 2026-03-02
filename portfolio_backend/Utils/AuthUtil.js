const validateEmail = (email) => {
    const isEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        email
      );
    return isEmail;
};

const dataValidation=({name, email}) => {
    return new Promise((resolve,reject) => {
        
        if(!email || !name)
            reject("Important credentials missing");

        if(typeof(email) !== "string" )
            reject("Incorrect formate of email");
        if(typeof(name) !== "string" )
            reject("Incorrect formate of name");


        if(!validateEmail(email))
            reject("Incorrect formate of email");

        resolve();
    });
}


module.exports = { dataValidation};