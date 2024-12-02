const router = require('express').Router();

const { Usuario } = require('../../db');

router.get('/', async(req, res) => { const usuarios = await Usuario.findAll();
     res.json(usuarios);});

     router.post('/',async (req, res) => {const usuario = await Usuario.create(req.body);
        res.json(usuario);
     });

     router.put('/direccion', async (req, res) => {
        try {
            await Usuario.update(req.body, {
                where: { direccion: req.body.direccion } // Cambié `req.params.direccion` a `req.body.direccion` ya que estás actualizando `direccion`
            });
            res.json({ success: 'se ha modificado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    

module.exports = router;
