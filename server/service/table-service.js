const TableModel = require("../models/table-model.js");

class TableService {
  async getAll() {
    const table = await TableModel.find();
    return table;
  }
  async getOne(id) {
    if (!id) {
        throw new Error('не указан ID')
    }
    const table = await TableModel.findById(id);
    return table;
  }
  async update(table) {
    if (!table._id) {
        throw new Error('не указан ID')
    }
    const updatedTable = await TableModel.findByIdAndUpdate(table._id, table, {new: true})
    return updatedTable;
  }
  async delete(_id) {
    if (!_id) {
        throw new Error('не указан ID')
    }
    const table = await TableModel.findByIdAndDelete(_id);
    return table;
}
}



module.exports = new TableService();