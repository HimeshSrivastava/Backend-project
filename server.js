const express =require("express");
const connectDb = require("./config/dbConnection");
const dotenv =require("dotenv").config()

const app=express();
const port=process.env.PORT || 3000;

connectDb();

app.use(express.json())
app.use("/api/contact",require("./routes/contactRouter"))

app.listen(port,()=>{
      console.log(`the server is running at ${port}`)
})


