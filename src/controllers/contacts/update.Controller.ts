import { db } from "../../db";

export let updateContactController = async function (req, res) {
  try {
    await db.query(
      `UPDATE Contacts set name='${req.body.name}',email='${req.body.email}',phone='${req.body.phone}' WHERE id = ${req.body.id} `
    );

    let response = await db.query(
        `select * from contact_label where contactId =${req.body.id}`
      );
  let contact_labels:any =response[0]
      let contactLabelIds = contact_labels.map((contact_label: any) => {
        contact_label.labelId;
      });
  
      req.body.labels = req.body.labels.filter((labelId) => !contactLabelIds.includes(labelId));
  


    let labelIds = req.body.labels
      .map((labelId) => `(${req.body.id},${labelId}) `)
      .join(", ");

    
    if (req.body.labels.length>0)
      await db.query(
        `insert into contact_label (contactId,labelId) values ${labelIds}`
      );

    res.send("update usccessfully");
  } catch (e) {
    console.log(e);
    res.status(500).send("something broke", e.message);
  }
};
