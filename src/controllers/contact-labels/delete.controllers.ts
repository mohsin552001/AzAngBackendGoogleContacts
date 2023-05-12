import { db } from "../../db"


export let deleteContactLabelController=function(req,res){
    console.log(req.body)
   db.query(`DELETE FROM  contact_label WHERE id = ${req.body.id}  `,function (err,results) {
    if(err){
      
        res.status(500).send('something broke')
    }else{
        res.send('contact label deleted successfully')
    }
    
   })
}