import { db } from "../../db"


export let deleteLabelController=function(req,res){
    console.log(req.body)
   db.query(`DELETE FROM  labels WHERE id = ${req.body.id}  `,function (err,results) {
    if(err){
      
        res.status(500).send('something broke')
    }else{
        res.send('DELETE successfully')
    }
    
   })
}