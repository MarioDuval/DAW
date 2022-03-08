import get_number from '../app.js';

describe('Sample app',()=>{
    describe('#get_number(x)', () => {

        test('testear funcion numero divisible 3', () => {
            expect(get_number(3)).toEqual('Fizz');
        });

        test('testear funcion numero divisible 5', () => {
            expect(get_number(5)).toEqual('Buzz');
        });

        test('testear funcion numero divisible 5 i 3', () => {
            expect(get_number(15)).toEqual('FizzBuzz');
        });

        test('testear funcion numero no divisible ni por 5 ni 3', () => {
            expect(get_number(4)).toEqual(4);
        });
    });
});