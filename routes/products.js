import { Router } from "express" 
const product=Router();

product.get('/products',(req,res)=>{
    res.render('products',{
        title:'my products page'
    })
})


export default product