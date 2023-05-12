import express from 'express'
import bodyParser from 'body-parser'
import {db} from "./src/db"
import { router } from './src/routes'
import cors from "cors"
let app =express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api',router)
app.listen(3000,()=>console.log('app is listen at 3000'))


