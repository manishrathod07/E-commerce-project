const { useScrollTrigger } = require("@mui/material");
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/swadeshshop")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("users",newSchema)

module.exports=User
