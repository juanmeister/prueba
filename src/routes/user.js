const router= require('express').Router();

router.get('/user', (req,res)=>{
    res.send('hola usuario');
});


module.exports= router;