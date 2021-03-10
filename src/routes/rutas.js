const {Router}=require('express');
const router=Router();

const juegos=require('./data.json');
const pdata=require('./pdata.json');
const scores=require('./scores.json');//ver como vamos a clasificar los scores

router.get('/', (req,res) =>{
    res.json({"Damn":"Daniel"});
})

router.get('/Game', (req,res) =>{
    res.json(juegos); 
})

router.get('/player',(req,res)=>{
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

router.get('/Game/Scores',(req,res)=>{
    res.json(scores);
})//hay que ver si vamos a separar los scores de los playes


/*router.post('/', (req,res)=>{
    const {Name,Language,Scores,Players,Ranking}=req.body;
    if(Name){
        const id=juegos.lenght +1;
        const newgame = {...req.body,id};
        juegos.push(newgame);
        res.status(200).json(juegos);
    }else{
        res.status(500).json({error:'no data'});
    }
})*/

module.exports=router;