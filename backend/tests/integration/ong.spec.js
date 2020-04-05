//import request from 'supertest'
const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../db/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      .send({
        name: "Ong de teste de integração",
        email: "teste.de.integração@gmail.com",
        whatsapp: "(11) 99999-9999",
        city: "Brasília",
        uf: "DF"
      })
      expect(res.body).toHaveProperty('id')
      expect(res.body.id).toHaveLength(8)
  })
})
