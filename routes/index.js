import  Router  from "express"
// import apiKey from "../middlewares/apiKey.js";
import Data from "../productsData.js";
const router=Router();
const j=9
const k=10

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
export {j,k}
export default router