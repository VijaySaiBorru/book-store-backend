const express= require("express");
const { createAOrder, getOrderByEmail } = require("./order.controler");
const router = express.Router();



//frontend => backend server =>controller => book schema =>database => send to server => back to frontend
//post==when submit something frontend to db
// get = when get something back from db
// put/patch = when edit or update something
// delete = when delete something

//create order
router.post('/',createAOrder)

//get orders y user email
router.get("/email/:email",getOrderByEmail)
module.exports = router;