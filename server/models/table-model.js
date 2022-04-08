const {Schema, model} = require('mongoose');


const TableSchema = new Schema({
  id:{ type: Schema.Types.ObjectId, required: false },
  data: { type: String, required: true },
  img: {type: String},
  title: {type: String, required: true },
  brand: {type: String, required: true},
  description: {type: String,  required: true},
  color: { type: String,  required: true},
  price: { type: String,  required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  
})


module.exports = model('Table', TableSchema);