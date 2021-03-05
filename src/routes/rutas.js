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

router.post('/', (req,res)=>{
    const {Name,Language,Scores,Players,Ranking}=req.body;
    if(Name){
        const id=juegos.lenght +1;
        const newgame = {...req.body,id};
        juegos.push(newgame);
        res.status(200).json(juegos);
    }else{
        res.status(500).json({error:'no data'});
    }
})

module.exports=router;