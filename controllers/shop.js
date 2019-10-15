const express = require('express')

const shopApi = require('../models/shop.js')

const shopRouter = express.Router()

shopRouter.get('/shop', (req, res) => {
  shopApi.getAllShops()
  .then((shops) => {
    res.json(shops)
  })
})

shopRouter.post('/shop', (req, res) => {
  shopApi.create(req.body)
  .then((newShop) => {
    res.json(newShop)
  })
})

shopRouter.get('/shop/:id', (req, res) => {
  shopApi.getOneShop(req.params.id)
  .then((shop) => {
    res.json(shop)
  })
})

shopRouter.put('/shop/:id', (req, res) => {
  shopApi.update(req.params.id, req.body)
  .then((updated) => {
    res.send(updated)
  })
})

shopRouter.delete('/shop/:id', (req, res) => {
  shopApi.remove(req.params.id)
  .then((deleted) => {
    res.send(deleted)
  })
})

module.exports = {
  shopRouter
}
