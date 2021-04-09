import express from 'express';
const router = express.Router();

//import Model
import Nota from '../models/nota';

//Add Nota
router.post('/nueva-nota', async(req, res) => {
    const body = req.body;
    try {
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Hay un error', error})
        
    }

});

//export router 

module.exports =router;