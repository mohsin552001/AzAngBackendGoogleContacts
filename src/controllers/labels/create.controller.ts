import { db } from "../../db"



export let createLabelController = async function(req,res){
  

    try{
      await  db.query(`INSERT INTO labels (title) VALUES ('${req.body.title}') `)
      res.send('Label created')
    }catch(e){
        console.log(e)
        res.status(500).send('something broke')
    }

}



