const express = require('express')

const shopApi = require('../models/shop.js')

const shopRouter = express.Router()

shopRouter.get('/shop/new', (req,res) => {
  res.render('createShop')
})

shopRouter.get('/shop/edit/:id', (req,res) => {
  shopApi.getOneShop(req.params.id)
  .then((shop) => {
    res.render('editShop', {shop})
  })
})

shopRouter.get('/shop', (req, res) => {
  shopApi.getAllShops()
  .then((shops) => {
    res.render('allShops', {shops})
  })
})

shopRouter.post('/shop', (req, res) => {
  shopApi.create(req.body)
  .then(() => {
    res.redirect('/shop')
  })
})

shopRouter.get('/shop/:id', (req, res) => {
  shopApi.getOneShop(req.params.id)
  .then((shop) => {
    res.render('oneShop', {shop})
  })
})

shopRouter.put('/shop/:id', (req, res) => {
  shopApi.update(req.params.id, req.body)
  .then(() => {
    res.redirect(`/shop/${req.params.id}`)
  })
})

shopRouter.delete('/shop/:id', (req, res) => {
  shopApi.remove(req.params.id)
  .then(() => {
    res.redirect('/shop')
  })
})

module.exports = {
  shopRouter
}
