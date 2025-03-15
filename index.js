const express = require('express')
const mongoose=require("mongoose")
const app = express()
const port=process.env.PORT || 5000;
const cors=require('cors');
require('dotenv').config();


//middleware
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','https://book-store-frontend-swart.vercel.app'],
    credentials: true
}))

const bookRoutes = require('./src/books/book.route')
app.use("/api/books",bookRoutes)
const orderRoutes = require('./src/orders/order.route')
app.use("/api/orders",orderRoutes)
const userRoutes = require('./src/users/user.route')
app.use("/api/auth",userRoutes)
const adminRoutes = require('./src/stats/admin.stats')
app.use("/api/admin",adminRoutes)

async function main(){
    await mongoose.connect(process.env.DB_URL);
    //routes
    app.use('/', (req, res) => {
        res.send("Welcome to my Book World!")
    })
}
main().then(()=>console.log("Mongodb connect successfully!")).catch(err => console.error(err));

app.listen(port,()=>{
    console.log(`Book app listening on port ${port}`)
})