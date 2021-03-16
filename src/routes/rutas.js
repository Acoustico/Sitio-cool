const {Router}=require('express');
const router=Router();

const juegos=require('./data.json');
const pdata=require('./pdata.json');
const scores=require('./scores.json');

router.get('/', (req,res) =>{
    res.json({"Damn":"Daniel"});
})

router.get('/Games', (req,res) =>{
    res.json(juegos); 
})

router.get('/player',(req,res)=>{
    res.json(pdata);
})

router.get('/Game/:id/Scores',(req,res)=>{
    var id=req.params;
    res.json(scores)
})

router.get('/Game/:id/Ranking',(req,res)=>{
    var id=req.params;
    res.json(scores);
})

router.get('/player/score', (req,res)=>{
    res.json(pdata);
})

router.get('/player/score/total',(req,res)=>{
    res.json(pdata);
})

/*router.get('/id',(req,res)=>{
    const {id}=req.params;
    juegos.forEach(juego=>{
        if(juego.ID==id){
            res.json(juego);
        }
    })
})*/

module.exports=router;