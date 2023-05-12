import { db } from "../../db"



export let getLabelController=async function(req,res){
 
    try{
        let results=await  db.query(`SELECT *  FROM  labels`)
        res.send(results[0])
    }catch(e){
        console.log(e)
        res.status(500).send('something broke' +e.message)

    }

}



