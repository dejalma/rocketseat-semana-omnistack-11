//import generateUniqueId from "../../src/utils/generateUniqueId"
const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generete unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId()
    expect(id).toHaveLength(8)
  })
})
