import { Router } from "express" 
import cors from'cors'
const product=Router();

product.use(cors())
product.get('/products',(req,res)=>{
    res.render('products',{
        title:'my products page'
    })
})


export default product


// import {
//     Router
// } from "express";
// const product = Router();

// product.get('/products', (req, res) => {
//     res.render('products', {
//         title: 'my products page'
//     });
// });

// export default product;