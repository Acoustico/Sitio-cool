const {Router}=require('express');
const router=Router();

const juegos=require('./data.json');

router.get('/', (req,res) =>{
    res.json({"Damn":"Daniel"});
})
router.get('/Game', (req,res) =>{
    res.json(juegos);
})
router.get('/:ID',(req,res)=>{
    const {ID}=req.params;
    juegos.forEach(juego=>{
        if(juego.ID==ID){
            req.json(juego);
        }
    })
})
router.get('/Player',(req,res)=>{
    res.json({"Score":"Score",
            "Total":"Total"});
})

module.exports=router;