const express=require("express")
const app=express();
const store=require("./middleware/multer");
const cors=require("cors");
const path = require("path");

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

app.use(express.json());
app.use(express.static(path.join(__dirname,"uploads")))
console.log(path.join(__dirname,"uploads"))
  
app.post("/upload",store.single("imageupload"),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
res.status(200).send({sucess:"Sucessfully"})
})






app.listen(5000,()=>{
    console.log("Running")
})