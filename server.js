import express from "express"
import router from "./routes/index.js";
import {k,j} from './routes/index.js'
import product from "./routes/products.js";
// import {k} from './routes/index.js'
import cors from "cors";
// const corsOptions={
//     origin: 'http://localhost:3001',
//     methods:'GET,PUT',
//     credential:true,
//     optionsSuccessStatus:204
      
// }

const app=express();
app.set("view engine","ejs")
app.use(express.static('public'))
app.use(router);
app.use(product);
app.use(cors())

app.get('/k',(req,res)=>{
    res.send(`${j}+${k}`)
})
app.listen(4000,()=>{
    console.log("starting at port at 3000 as a local")
})



