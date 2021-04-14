import express from 'express';
const router = express.Router();

//import Model
import Nota from '../models/nota';

//Add Nota
router.post('/nueva-nota', async(req, res) => {
    //read everything that comes in the body
    const body = req.body;
    try {
        const notaRes = await Nota.create(body);
        res.status(200).json(notaRes);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Hay un error', error})
        
    }

});

//get parameters
router.get('/nota/:id', async(req, res) => {
    //requerimiento.params
    const _id = req.params.id;
    try {
        //bbdd id específico de mongo pasado por los params de la route
        const notaRes = await Nota.findOne({_id});
        res.json(notaRes);

    } catch (error) {
        return res.status(400).json({ mensaje: 'Hay un error', error})
        
    }
});

//GET ALL
router.get('/nota', async(req, res) => {
    try {
        //muestra todas las notas
        const notaRes = await Nota.find();
        res.json(notaRes);

    } catch (error) {
        return res.status(400).json({ mensaje: 'Hay un error', error})
        
    }
});

//DELETE
router.delete('/nota/:id', async(req, res) => {

    const _id = req.params.id;
    try {

        const notaRes = await Nota.findByIdAndDelete({_id});
        if(!notaRes){
            return res.status(400).json({ mensaje: 'No se encontró el ID', error})
        }
        res.json(notaRes);

    } catch (error) {
        return res.status(400).json({ mensaje: 'Hay un error', error})
        
    }
});

//PUT update
router.put('/nota/:id', async(req, res) => {

    const _id = req.params.id;
    const body = req.body;
    try {
        //busca el id y actualiza el new true es el que actualiza la inf
        const notaRes = await Nota.findOneAndUpdate(_id,body,{new:true});
        res.json(notaRes);

    } catch (error) {
        return res.status(400).json({ mensaje: 'Hay un error', error})
        
    }
});
//export router 

module.exports =router;