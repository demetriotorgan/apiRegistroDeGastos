const registroModel = require('../models/registroModel')

module.exports.saveRegistro = async(req,res)=>{
    try {
        const {valor, tipo, gasto} = req.body    
        const novoRegistro = await registroModel.create({valor, tipo, gasto});
        console.log('✅ Gasto registrado com sucesso');
        console.log(novoRegistro);
        res.status(201).json(novoRegistro);
    } catch (error) {
        console.error('❌ Erro ao registrar gasto:', error.message);
        res.status(500).json({ erro: 'Erro ao salvar registro.' });   
    }
}