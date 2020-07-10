const User = require("../models/user");
//It is recommended to name the same as we have given in model/user
//while exporting it that is  module.exports=mongoose.model("User",userSchema);
//module.exports actually exports only one if we want to export more than we can use this

//req.body holds parameters that are sent up from the client as part of a POST request.
// exports.signup = (req, res) => {
//     console.log("REQ BODY", req.body);
//     res.json({
//         messaage: "user signup"
//     });
// };

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "NOT ABLE TO SAVE USER IN DB",
            });
        }
        res.json(user);
    });
};

exports.signout = (req, res) => {
    res.json({
        messaage: "user signout1",
    });
};
