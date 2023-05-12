import { db } from "../../db"



export let createContactLabelController =function(req,res){
  
   db.query(`INSERT INTO contact_label (labelId,contactId) VALUES ('${req.body.labelId}','${req.body.contactId}') `,function (err,results) {
    if(err){
       
        res.status(500).send('something broke')
    }else{
        res.send('Contact label created')
    }
    
   })
}