import express = require("express")
import { controlador as indexCtrl } from "../api/controladores/indexControlador"

const ruteador = express.Router()

ruteador.get("/", indexCtrl.home)

export { ruteador }