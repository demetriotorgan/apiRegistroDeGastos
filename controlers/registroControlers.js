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
};

module.exports.getRegistros = async(req,res) =>{
    try {
        const registros = await registroModel.find().sort({data:-1}); //Ordena do mais recente
        res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar registros', error);
        res.status(500).json({erro: 'Erro ao buscar registros'})
    }
};