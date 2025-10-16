import { Router } from 'express'

const router = Router()

router.get("/", (req, res) => {
    res.send("Ruta principal")
})

router.get("/home", (req, res) => {
    res.send("Ruta home")
})

export default router