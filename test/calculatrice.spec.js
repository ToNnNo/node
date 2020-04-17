const chai = require('chai')
    , expect = chai.expect;
const calculatrice = require('../calculatrice/index');

describe('Calculatrice', () => {

    describe('#addition', () => {

        it('1 + 2 = 3', () =>{
            const result = calculatrice.addtion(...[1, 2]);

            expect(result).is.equal(3);
        });

        it('1 + 2 + 3 + 4 + 5 = 15', () => {
            const result = calculatrice.addtion(1, 2, 3, 4, 5);
            expect(result).is.equal(15);
        });

        it('-10 + 20 = 10', () => {
            const result = calculatrice.addtion(-10, 20);
            expect(result).is.equal(10);
        });

        it('-10 + -20 = -30', () => {
            const result = calculatrice.addtion(-10, -20);
            expect(result).is.equal(-30);
        });

        it('addtion(1) == 1', () => {
            const result = calculatrice.addtion(1);
            expect(result).is.equal(1);
        });

        it('addtion() == 0', () => {
            const result = calculatrice.addtion();
            expect(result).is.equal(0);
        });

        it('should throw Error with null + null', () => {
            expect( () => calculatrice.addtion(null, null) ).to.throw();
        });

        it('should throw Error with "a" + "b"', () => {
            expect( () => calculatrice.addtion("a", "b") ).to.throw();
        });

        it('should throw Error with "1" + "2"', () => {
            expect( () => calculatrice.addtion("1", "2") ).to.throw();
        });

        it('should throw Error with 1 + "2"', () => {
            expect( () => calculatrice.addtion(1, "2") ).to.throw();
        });

        it('should throw Error with null + 2', () => {
            expect( () => calculatrice.addtion(null, 2) ).to.throw();
        });

        it('should throw Error with undefined + 2', () => {
            expect( () => calculatrice.addtion(undefined, 2) ).to.throw();
        });

        it('should throw Error with false + 2', () => {
            expect( () => calculatrice.addtion(false, 2) ).to.throw();
        });

        it('should throw Error with true + 2', () => {
            expect( () => calculatrice.addtion(true, 2) ).to.throw();
        });

    });

});
