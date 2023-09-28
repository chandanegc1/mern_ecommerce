const express = require("express");
const app = express();

const Products = require("./module/Products");
const Cart = require("./module/cart");
const Register = require("./module/Registration");
require("./db/connection");
require('dotenv').config();
const cors = require("cors");

               
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

        // login process
app.get("/product" , (req, res)=>{
    Products.find().then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/product" , async (req ,res)=>{
    try {
            const value = new Products({
            name: req.body.name,
            img: req.body.img,
            brand: req.body.brand,
            price: req.body.price
        });
        const x = await value.save();
        console.log(req.body.name);
        res.send(x);
    } catch (error) {
        res.status(400).send();  
    } 
})

               //   cart
app.get("/cart" , (req, res)=>{
    Cart.find().then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/cart" , async (req ,res)=>{
    try {
            const Cvalue = new Cart({
            name: req.body.name,
            img: req.body.img,
            brand: req.body.brand,
            price: req.body.price
        });
        const Cx = await Cvalue.save();
        console.log(req.body.name);
        res.send(Cx);
    } catch (error) {
        res.status(400).send();  
    } 
})
app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await Cart.findByIdAndDelete(id);
    
        if (!deletedItem) {
          return res.status(404).json({ error: 'Item not found' });
        }
    
        return res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
  });

    //  login
app.get("/register" , (req, res)=>{
    Register.find().then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/register" , async (req ,res)=>{
    try {
            const lvalue = new Register({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        const lx = await lvalue.save();
        console.log(req.body.name);
        res.send(lx);
    } catch (error) {
        res.status(400).send();  
    } 
})


        // server create 
app.listen(process.env.PORT  ,()=>{
    console.log('server listening,.....' , process.env.PORT );

})

