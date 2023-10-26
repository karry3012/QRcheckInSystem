const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/child")
.then(() =>{
    console.log("connected....");
})
.catch((eror) =>{
    console.log(error);
})