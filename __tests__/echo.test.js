let Echo = require('../src/echo')
let echo = new Echo


describe('#Echo', () => {
  test('it should return string', () => {
    expect(echo.repeat("Hello")).toBe("Hello")
  })
})
