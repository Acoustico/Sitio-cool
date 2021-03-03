const {Router}=require('express');
const router=Router();

router.get('/', (req,res) =>{
    res.json({"Damn":"Daniel"});
})
router.get('/Game', (req,res) =>{
    res.json({"GameID":"ID",
            "Name":"Name",
            "Language":"Language",
            "Scores":"Scores",
            "Players":"Players",
            "Ranking":"Ranking"});
})
router.get('/Player',(req,res)=>{
    res.json({"Score":"Score",
            "Total":"Total"});
})

module.exports=router;