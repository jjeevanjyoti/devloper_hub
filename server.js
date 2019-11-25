const express = require("express");
const connectDB = require("./config/db")
const app = express();

//connect DB
connectDB()

//init middleware
//as body parser includedin expreess we dont need bodyParser.json()
app.use(express.json({extended:false}) )

const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("API Running");
})

//Define Routes
app.use('/api/users',require("./routes/api/users"));
app.use('/api/auth',require("./routes/api/auth"));
app.use('/api/profile',require("./routes/api/profile"));
app.use('/api/post',require("./routes/api/post"));




app.listen(port,()=>{
    console.log(`App started running at ${port}`)
})

