import { fizzbuzz, FizzbuzzFromOnetoInput } from './fizzbuzz';


describe('fizzbuzz function',() => {
  it('when input number return  number', () => {
    expect(fizzbuzz(1)).toEqual(1)
    expect(fizzbuzz(4)).toEqual(4)
  })
  it('when input divide by three  return Fizz' , () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
    expect(fizzbuzz(6)).toEqual('Fizz')
    expect(fizzbuzz(9)).toEqual('Fizz')
  })
  it('when input divide by five return Buzz', () => {
    const inputs = [5, 10, 20, 25, 35]
    inputs.forEach(input => {
      expect(fizzbuzz(input)).toEqual('Buzz')
    })
  })
  it('when input divide by five and three return FizzBuzz',() => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz')
    expect(fizzbuzz(30)).toEqual('FizzBuzz')
  })
})


describe('output ', () => {
  it('when input  5 return 1 2 Fizz 4 Buzz' , () => {
    expect(FizzbuzzFromOnetoInput(5)).toEqual('1 2 Fizz 4 Buzz ')
  })

  it('when input  10 return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz' , () => {
    expect(FizzbuzzFromOnetoInput(10)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz ')
  })
})
