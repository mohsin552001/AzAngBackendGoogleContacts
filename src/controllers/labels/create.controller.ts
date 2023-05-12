import { db } from "../../db"



export let createLabelController =function(req,res){
  
   db.query(`INSERT INTO labels (title) VALUES ('${req.body.title}') `,function (err,results) {
    if(err){
       
        res.status(500).send('something broke')
    }else{
        res.send('Label created')
    }
    
   })
}