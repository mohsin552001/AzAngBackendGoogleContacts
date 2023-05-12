import { db } from "../../db";
export let getContactController = async function (req, res) {
  let searchKeyword = req.query.searchKeyword;
  let condition = searchKeyword
    ? `WHERE name LIKE '%${searchKeyword}%' OR phone LIKE '%${searchKeyword}%'`
    : "";
  try {
    let response = await db.query(`SELECT *  FROM  Contacts ${condition} order by id desc`);
    let contacts: any = response[0];
    let contactIds = contacts.map((contact) => contact.id);
 
    let contactLabelsResponse = await db.query(
      `SELECT contact_label.contactId, labels.id, labels.title FROM contact_label LEFT JOIN labels on labels.id = contact_label.labelId WHERE contactId in (${contactIds.join(
        ","
      )})`
    );
    let contactLabels: any = contactLabelsResponse[0];
    contacts = contacts.map((contact) => {
      contact.labels = contactLabels.filter(
        
        (contactLabel) => contactLabel.contactId == contact.id
        
      );
    
      return contact;
    });
    res.send(contacts);
  } catch (e) {
    console.log(e);
    res.status(500).send("something went wrong");
  }
};
