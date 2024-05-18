const router = require("express").Router();
const bookModel=require("../models/bookModels");

router.post("/add",async(req,res) =>{   //post-when goes to add book async because it will perform all the tasks simultaneously 
    try {
        const data=req.body;   //when we post a data it will take the data from req.body
        const newBook = new bookModel(data);  //newBook is the object of bookModel
        await newBook.save().then(()=>{
            res.status(200).json({message:"Book added successfully"}) //if book saved successfully =message
        });

    } catch (error) {
        console.log(error);
    }
});
//get request
router.get("/getBooks",async(req,res) =>{
    let books;
    try {
       books=await bookModel.find(); 
       res.status(200).json({books});
    } catch (error) {
        console.log(error);
    }
});

//get req with the help of id

router.get("/getBooks/:id",async(req,res) =>{
    let book;
    const id=req.params.id;
    try {
        book=await bookModel.findById(id);
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        
    }
});

//update book by id

router.put("/updateBook/:id",async(req,res) =>{
    const id =req.params.id;
    const {bookname,description,author,image,price}=req.body;
    let book;
    try {
      book=await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price
        });
        await book.save().then(()=>res.json({message:"Book Updated"}));
    } catch (error) {
        console.log(error);
    }
});

//delete book by id

router.delete("/deleteBook/:id",async(req,res)=>{
    const id=req.params.id;
    let book;
    try {
        await bookModel.findByIdAndDelete(id).then(( )=>res.status(201).json({message:"Deleted successfully"}));
    } catch (error) {
        console.log(error);
        
    }
})

module.exports=router;