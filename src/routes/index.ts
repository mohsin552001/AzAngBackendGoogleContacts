
import express from "express";
import { contactRouter } from "./contacts/contacts.routes";
import { labelRoutes } from "./labels/labels.routes";
import { contactLabelRoutes } from "./contact-labels/labels.routes";
export let router =express.Router()
router.use('/contact',contactRouter)
router.use('/label',labelRoutes)
router.use('/contact-label',contactLabelRoutes)