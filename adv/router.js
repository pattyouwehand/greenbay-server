const { Router } = require('express')
const Advertisement = require('./model')
const router = new Router()

router.get(                                         //get all
  '/advertisement',
  (req, res, next) => {
    Advertisement
    .findAll()
    .then(advList => res.json(advList))
    .catch(err => next(err))
})

router.get(                                          //get one
  '/advertisement/:id',
  (req, res, next) => {
    Advertisement
    .findByPk(req.params.id)
    .then(advertisementId => res.json(advertisementId))
    .catch(err => next(err))
})

router.post(                                        //create new
  '/advertisement',
  (req, res, next) => {
    Advertisement
    .create(req.body)
    .then(team => res.json(advertisement))
})