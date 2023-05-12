import { db } from "../../db"


export let updateLabelController=function(req,res){
    console.log(req.body)
   db.query(`UPDATE labels set title='${req.body.title} WHERE id = ${req.body.id}  `,function (err,results) {
    if(err){
        console.log(err)
        res.status(500).send('something broke')
    }else{
        res.send('Label update  successfully')
    }
    
   })
}