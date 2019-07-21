export function fizzbuzz(number):  string {

    if(number % 3 === 0 && number %5 ===0) {
        return'FizzBuzz'
    }
    if(number % 3===0){
        return 'Fizz'
    }
    if(number % 5 === 0){
        return 'Buzz'
    }
    return number

}

export function FizzbuzzFromOnetoInput(number):string {
    let output = ''
    for( let i = 1 ; i <= number ; i++) {
        output += fizzbuzz(i) + ' '
    }
    return output
}