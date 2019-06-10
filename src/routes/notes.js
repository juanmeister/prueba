const router= require('express').Router();

router.get('/notes', (req,res)=>{
    res.send('Aqui poner las notas');
});


module.exports= router;