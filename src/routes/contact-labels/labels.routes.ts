import express from "express";
import { db } from "../../db";
import { createContactLabelController } from "../../controllers/contact-labels/create.controller";
import { deleteContactLabelController } from "../../controllers/contact-labels/delete.controllers";
import { getContactLabelController } from "../../controllers/contact-labels/get.Controller";

export let contactLabelRoutes = express.Router();
contactLabelRoutes.post("", createContactLabelController);

contactLabelRoutes.delete("", deleteContactLabelController);
contactLabelRoutes.get("", getContactLabelController);
