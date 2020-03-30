// import express from 'express'
const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController.js')
const IncidentController = require('./controllers/IncidentController.js')
const ProfileController = require('./controllers/ProfileController.js')
const SessionController = require('./controllers/SessionController.js')

const routes = express.Router()

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
}), SessionController.create)

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(20)
      .regex(/^(\()?\d{2,3}(\))?(-|\s)?\d{4,5}(-|\s)\d{4}$/),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}), OngController.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index)

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().min(1),
    limit: Joi.number().min(1),
  }),
}), IncidentController.index)

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().precision(2).min(0.01).required()
  }),
}), IncidentController.create)

routes.delete('/incidents/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required().min(1),
  }),
}), IncidentController.delete)

// export default routes
module.exports = { routes }
