import { db } from "../../db";

export let createContactController = async function (req, res) {
  try {
    //insert contact 
    let response = await db.query(
      `INSERT INTO Contacts (name,phone,email) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.email}') `
    );
    let responseObj: any = response[0];
    let contactId = responseObj.insertId;
    let labelIds = req.body.labels;
//add labels if provide from the body
    if(labelIds && labelIds.length>0){
      let queryValuesPart = labelIds.map(
        (labelId) => `(${contactId},${labelId})`
      );
      let queryValuesPartStr = queryValuesPart.join(",");
      let query = `insert into contact_label (contactId,labelId) values ${queryValuesPartStr} `;

      await db.query(query);
    }

   
    res.send("contact created");
  } catch (e) {
    console.log(e);
    res.status(500).send("something broke", e.message);
  }
};
