const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://bookstore:pradipta117@cluster0.m8gpre0.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"

).then(()=>console.log("Connected"));