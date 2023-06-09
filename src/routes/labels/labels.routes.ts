import express from "express";
import { db } from "../../db";
import { createLabelController } from "../../controllers/labels/create.controller";
import { updateLabelController } from "../../controllers/labels/update.Controller";
import { deleteLabelController } from "../../controllers/labels/delete.controllers";
import { getLabelController } from "../../controllers/labels/get.Controller";
export let labelRoutes = express.Router();
labelRoutes.post("", createLabelController);
labelRoutes.patch("", updateLabelController);
labelRoutes.delete("/:id", deleteLabelController);
labelRoutes.get("", getLabelController);
