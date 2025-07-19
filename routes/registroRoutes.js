const {Router} = require('express')
const {saveRegistro, getRegistros, deleteRegistro} = require('../controlers/registroControlers')

const router = Router();

router.post('/save', saveRegistro);
router.get('/all', getRegistros);
router.delete('/delete:id', deleteRegistro)

module.exports = router;