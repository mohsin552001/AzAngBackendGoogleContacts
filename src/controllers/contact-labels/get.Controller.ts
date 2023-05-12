import { db } from "../../db"



export let getContactLabelController=function(req,res){
    console.log(req.body)
   db.query(`SELECT *  FROM  contact_label   `,function (err,results) {
    if(err){
      
        res.status(500).send('something broke')
    }else{
        res.send(results)
    }
    
   })
}