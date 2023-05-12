import { db } from "../../db";
export let getSingleContactController = async function (req, res) {
  try {
    let response = await db.query(
      `SELECT *  FROM  Contacts where id = '${req.params.id}' order by id desc`
      
    );
    let result: any = response[0];
    let contact = result[0];
   
if(!contact){
  res.status(404).send('contact not found!')

  return;
}
    let contactLabelsResponse = await db.query(
      `SELECT contact_label.contactId ,labels.id, labels.title FROM contact_label LEFT JOIN labels on labels.id = contact_label.labelId WHERE contactId = ${contact.id}`
    );
    let contactLabels: any = contactLabelsResponse[0];
    contact.labels = contactLabels;
res.send(contact)
  } catch (e) {
    console.log(e);
    res.status(500).send("something went wrong" );
  }
};
