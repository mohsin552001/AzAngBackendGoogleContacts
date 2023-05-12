import { db } from "../../db";

export let deleteContactController = async function (req, res) {
  try {

await db.query(`delete from contact_label where contactId =${req.params.id}`)

    let response = await db.query(
      `DELETE FROM  Contacts WHERE id = ${req.params.id}`
    );

    res.send(response);
  } catch (e) {
   console.log(e)
    res.status(500).send("something went wrong"+e.message);
  }
};
