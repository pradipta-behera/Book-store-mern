const express=require("express");
const app = express( );
const bookRoute=require("./routes/bookRoutes");

require("./connection/connection");
app.use(express.json());
app.use("/api/v1" , bookRoute);


app.listen(1000,() =>{          //app will listen at port 1000
    console.log("Server started successfully");
});
