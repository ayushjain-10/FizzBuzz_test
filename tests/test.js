const fb = require('../fizzbuzz')
const {p_1, p_2} = require('../index')


test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
  })

test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
  })

test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
  })

test('isFizzy', () => {
    const result = fb.isFizzy(3, p_1)
    expect(result).toBe(true)
  })

test('isBuzzy', () => {
    const result = fb.isBuzzy(5, p_2)
    expect(result).toBe(true)
  })

test('fizzyBuzzy', () => {
    const result = fb.fizzyBuzzy(15, p_1, p_2)
    const result_2 = fb.fizzyBuzzy(3, p_1, p_2)
    const result_3 = fb.fizzyBuzzy(5, p_1, p_2)
    expect(result).toBe(fb.FIZZBUZZ)
    expect(result_2).toBe(fb.FIZZ)
    expect(result_3).toBe(fb.BUZZ)

  })

test('fizzBuzz', () => {
    const result = fb.fizzBuzz(15, 3, 5)
    expect(result).toEqual({ count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 })
    const result_2 = fb.fizzBuzz(15, 2, 7)
    expect(result_2).toEqual({ count: 15, fizz: 6, buzz: 1, fizzBuzz: 1 })
  })