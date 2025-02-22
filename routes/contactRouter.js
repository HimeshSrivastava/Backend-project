const express = require("express")

const router= express.Router()
const {getContacts,createContacts,updateContacts,getContact,deleteContacts}=require("../controllers/contactControllers")
router.route("/").get(getContacts).post(createContacts)

router.route("/:id").put(updateContacts).get(getContact).delete(deleteContacts)


module.exports = router;