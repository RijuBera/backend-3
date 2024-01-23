

function apiKey(req, res, next) {
    const api_key = '1234567';
    // console.log(req.query)
    const userkey=req.query.api_key;
    if(userkey &&( userkey===api_key)){
    next();
}
   else{
    res.json({message:'not found'})
   }
}

export default apiKey