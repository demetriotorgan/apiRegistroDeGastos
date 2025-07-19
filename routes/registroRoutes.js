const {Router} = require('express')
const {saveRegistro, getRegistros} = require('../controlers/registroControlers')

const router = Router();

router.post('/save', saveRegistro);
router.get('/all', getRegistros);

module.exports = router;