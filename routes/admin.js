let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')

/* Get - Home admin */
router.get('/', controller.adminIndex)
/* Get - Lista las sucursales */
router.get('/sucursales', controller.sucursales)
/* Get - Formulario de carga (Sucursales) */
router.get('/agregarSucursal', controller.create)
/* POST - Recibe data del formulario */
router.post('/agregarSucursal', controller.store)
/* GET - Formulario de edicion (sucursales) */
router.get('/editarSucursal/:id',controller.edit)
/* PUT - Edita sucursal*/
router.put('/editarSucursal/:id',controller.update)
/* DELETE-Borra sucursal */
router.delete('/elminarSucursal',controller.fatality)

module.exports = router