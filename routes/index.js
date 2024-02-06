import  Router  from "express"
// import apiKey from "../middlewares/apiKey.js";
import Data from "../productsData.js";
import bodyParser from "body-parser";
import product from "./products.js";
const router=Router();
const j=9
const k=10
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("its home pagee")
})

router.get("/index",(req,res)=>{
    res.render("index",{price:450,oiii:90,t:'mera page'})
})

router.get("/about",(req,res)=>{
    res.render('about')
})
router.get("/product",(req,res)=>{
  res.render('product')
})
router.get('/api/products', (req,res)=>{
res.json(Data)
});
router.post('/api/products',(req,res)=>{
    // console.log(req.body)
    const {name,price}=req.body
    // console.log(time)
    // console.log(req.body)
    if(!name ||!price){
        return res.status(422)
    }
    const data={
        // id:`${Data.length+1}`,
        id:Data.length+1,
        //  time,
       name,
       price

    }
    // console.log(req.body)
    // console.log(Data)
    Data.push(data)
    console.log(data)
    res.json(data)
    // console.log(res)
})


router.delete('/api/products/:id',(req,res)=>{
    // console.log(typeof(req.params.id))
    // console.log(Data.id)
    // console.log(Data)
// Data.filter((pr)=>req.params.id!==pr.id)
const updatedData = Data.filter((pr) => pr.id != req.params.id);

// Update the Data array
Data.length = 0;
Array.prototype.push.apply(Data, updatedData);
// console.log(Data)
res.json({message:'success'})
})

export {j,k}
export default router




// import {
//     Router
// } from "express";
// import Data from "../productsData.js";

// const router = Router();
// const j = 9;
// const k = 10;

// router.get('/', (req, res) => {
//     res.send("its home pagee");
// });

// router.get("/index", (req, res) => {
//     res.render("index", {
//         price: 450,
//         oiii: 90,
//         t: 'mera page'
//     });
// });

// router.get("/about", (req, res) => {
//     res.render('about');
// });

// router.get("/product", (req, res) => {
//     res.render('product');
// });

// router.get('/api/products', (req, res) => {
//     res.json(Data);
// });

// export {
//     j,
//     k
// };
// export default router;