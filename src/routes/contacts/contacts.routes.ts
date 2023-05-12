
import express from "express";
import { db } from "../../db";
import { createContactController } from "../../controllers/contacts/create.controller";
import { getContactController } from "../../controllers/contacts/get.Controller";
import { deleteContactController } from "../../controllers/contacts/delete.controllers";
import { updateContactController } from "../../controllers/contacts/update.Controller";
import { getSingleContactController } from "../../controllers/contacts/get-single.controller";
export let contactRouter =express.Router()




contactRouter.post('',createContactController)


contactRouter.patch('',updateContactController)


contactRouter.delete('/:id',deleteContactController)
contactRouter.get('/single/:id',getSingleContactController)
contactRouter.get('',getContactController)