//@desc Get all contacts
//@route GET /api/contacts
//@access public
const asyncHandler= require("express-async-handler")
const contact = require("../models/contactModel")

const getContacts =asyncHandler(async(req,res)=>{
    const contacts= await contact.find();
   res.status(200).json(contacts);
})
const createContacts =asyncHandler(async(req,res)=>{
    console.log("the request body is: ", req.body)
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("this feild are medateaory")
    }
    const contacts= await contact.create({
      name,
      email,
      phone,
    }
    )
   res.status(200).json(contacts);
})
const updateContacts =asyncHandler(async(req,res)=>{
   const contacts = await contact.findById(req.params.id)
   if(!contacts){
      res.status(404);
      throw new Error("contact not found");
   }
   const updateContact = await contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
   );
   res.status(200).json(updateContact);
})

const getContact =asyncHandler(async(req,res)=>{
   const foundContact = await contact.findById(req.params.id);
   if(!foundContact){
      res.status(404);
      throw new Error("contact not found");
   }
   res.status(200).json(foundContact);
})

const deleteContacts =asyncHandler(async(req,res)=>{
   const Contact = await contact.findById(req.params.id);
   if(!Contact){
      res.status(404);
      throw new Error("contact not found");
   }
   await contact.deleteOne({ _id: req.params.id });
   res.status(200).json(Contact);
})

module.exports = {getContacts,createContacts,updateContacts,getContact,deleteContacts}