const express = require("express");
const dotenv=require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config()
const PORT = process.env.PORT
const technicalRouter=require("./router/lahiye.routes");
const userRouter = require("./router/user.routes");
const PaymentRouter=require("./router/paymant.routes")
app.use(express.json());
app.use(cors())
app.use("/technical",technicalRouter)
mongoose.connect("mongodb+srv://tu6xkjyle:Rassel73@cluster0.d2pfwsr.mongodb.net/").then(res=>{
    console.log("mongo");
})
app.use("/users",userRouter)
// app.use("/paymant",PaymentRouter)
app.listen(PORT, () => {
    console.log("server connection PORT");
});
    