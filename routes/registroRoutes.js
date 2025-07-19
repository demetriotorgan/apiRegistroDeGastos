const {Router} = require('express')
const {saveRegistro} = require('../controlers/registroControlers')

const router = Router();

router.post('/save', saveRegistro);

module.exports = router;