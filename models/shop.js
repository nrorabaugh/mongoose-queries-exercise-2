const mongoose = require('./connection.js')

const ShopSchema = new mongoose.Schema({
 name: String,
 employees: Number,
 currentlyOpen: Boolean
})

const ShopCollection = mongoose.model('Shop', ShopSchema)

const getAllShops = () => {
  return ShopCollection.find({})
}

const getOneShop = (id) => {
  return ShopCollection.findById(id)
}

const create = (shopData) => {
  return ShopCollection.create(shopData)
}

const update = (id, shopData) => {
  return ShopCollection.updateOne({"_id": id}, shopData)
}

const remove = (id) => {
  return ShopCollection.deleteOne({"_id": id})
}

module.exports = {
  ShopCollection,
  getAllShops,
  getOneShop,
  create,
  update,
  remove
}
