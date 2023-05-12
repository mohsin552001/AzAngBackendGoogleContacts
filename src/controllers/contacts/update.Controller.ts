import { db } from "../../db"


export let updateContactController=function(req,res){
    console.log(req.body)
   db.query(`UPDATE CONTACTS set name='${req.body.name}',email='${req.body.email}',phone='${req.body.phone}' WHERE id = ${req.body.id}  `,function (err,results) {
    if(err){
        console.log(err)
        res.status(500).send('something broke')
    }else{
        res.send('update successfully')
    }
    
   })
}