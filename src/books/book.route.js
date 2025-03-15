const express= require("express");
const Book = require("./book.model");
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require("./book.controler");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();



//frontend => backend server =>controller => book schema =>database => send to server => back to frontend
//post==when submit something frontend to db
// get = when get something back from db
// put/patch = when edit or update something
// delete = when delete something

//post a book
router.post('/create-book',verifyAdminToken,postABook)

//get all books
router.get("/",getAllBooks)

//single book
router.get("/:id",getSingleBook)

//update book
router.put("/edit/:id",updateBook)

//delete book
router.delete("/:id",deleteABook)

module.exports = router;