const registroModel = require('../models/registroModel')

module.exports.saveRegistro = async(req,res)=>{
    try {
        const {valor, tipo, gasto, categoria} = req.body    
        const novoRegistro = await registroModel.create({valor, tipo, gasto, categoria});
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

module.exports.deleteRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    const deletado = await registroModel.findByIdAndDelete(id);

    if (!deletado) {
      return res.status(404).json({ erro: 'Registro não encontrado' });
    }

    res.status(200).json({ mensagem: 'Registro deletado com sucesso', registro: deletado });
  } catch (error) {
    console.error('Erro ao deletar registro:', error);
    res.status(500).json({ erro: 'Erro ao deletar registro' });
  }
};