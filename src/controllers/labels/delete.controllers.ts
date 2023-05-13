import { db } from "../../db"


export let deleteLabelController=async function(req,res){
    
try{
    await  db.query(`DELETE FROM  contact_label WHERE labelId = ${req.params.id}  `)

 await  db.query(`DELETE FROM  labels WHERE id = ${req.params.id}  `)
    res.send('DELETE successfully')
}catch(e){
    console.log(e)
    res.status(500).send('something broke')
}
}









