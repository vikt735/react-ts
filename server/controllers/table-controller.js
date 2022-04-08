const TableModel = require('../models/table-model');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../exceptions/api-error');
const TableService = require('../service/table-service');
const {ObjectId} = require('mongoose');
const { ResultWithContext } = require('express-validator/src/chain');

class TableController {
  async create(req, res, next) {
    try {
      const {data, title, brand, description, color, price} = req.body;
      const {img} = req.files;
      let fileName =  img.name + uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'image', fileName));
      const table = await TableModel.create({data, title, brand, description, color, price, img:fileName});
      await table.save()
      return res.send(table)
  } catch (e) {
      next(ApiError.BadRequest(e.message))
  }}

  async getAll(req, res) {
    try {
        const table = await TableService.getAll();
        return res.json(table);
    } catch (e) {
        res.status(500).json(e)
    }
  }
  async getOne(req, res) {
    try {
        const table = await TableService.getOne(req.params.id)
        return res.json(table)
    } catch (e) {
        res.status(500).json(e)
    }
  }
  /*async update(req, res) {
    try {
        const updatedTable = await TableService.update(req.body);
        return res.json(updatedTable);
    } catch (e) {
        res.status(500).json(e.message)
    }
  }*/
  async delete(req, res) {
    try {
        const table = await TableService.delete(req.params.id);
        return res.json(table)
    } catch (e) {
        res.status(500).json(e)
    }
  }
  async update(req, res) {
    try {
        const {_id,data, title, brand, description, color, price} = req.body;
        const {img} = req.files;
        let fileName =  img.name + uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'image', fileName));
        const updatedTable = await TableService.update({_id, data, title, brand, description, color, price, img:fileName});
        return res.json(updatedTable);
    } catch (e) {
        res.status(500).json(e)
    }
  }
  
}

module.exports = new TableController;