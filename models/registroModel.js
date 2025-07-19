const mongoose = require('mongoose')

const RegistroSchema = new mongoose.Schema({
data:{
    type:Date,
    default: Date.now
},
valor:{
    type:Number,
    require:true
},
tipo:{
    type:String,
    require:true,
    enum:['debito', 'credito']
},
gasto:{
    type:String,
    require:true,
    enum:['essencial', 'nao-essencial']
}
})

module.exports = mongoose.model('Registro', RegistroSchema)