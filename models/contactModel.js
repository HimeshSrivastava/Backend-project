const mongoose =require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please fill the name"],
    },
    email:{
        type:String,
        required:[true,"please fill the email"],
    },
    phone:{
        type:String,
    required:[true,"please fill the phone number"],
},
},
{
    timestamps:true
}
);
module.exports =mongoose.model("contact",contactSchema)