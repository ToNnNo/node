const assert = require('assert');
const chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Exemple de test:', () => {

    let data = [];
    let obj = {};

    let f;

    // hook
    beforeEach('Before Each Action', () => {
        data = [1, 2, 0, 4, 5];
        obj = {firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com'};
    });

    before('create async function', () => {
        f = () => {
            return new Promise( resolve => {
                setTimeout( () => {
                    resolve('Ce message arrive un peu tard');
                }, 2000);
            });
        };
    });

    it('test fonction asynchrone (assert)', (done) => {

        f().then( (message) => {
            assert.equal(message, 'Ce message arrive un peu tard');
            done();
        });

    });

    it('test fonction asynchrone (chai)', (done) => {

        /*f().then( (message) => {
            expect(message).is.eventually.equal('Ce message arrive un peu tard').notify(done);
        });*/

        expect(f()).is.eventually.equal('Ce message arrive un peu tard').notify(done);

    });

    it('test fonction asynchrone (async/await)', async () => {

        let message = await f();

        expect(message).to.equal('Ce message arrive un peu tard');
    });

    it('pending test');

    it('2x3 = 6 with assert', () => {
        let r = 2 * 3;

        assert.equal(r, 6);
    });

    it.skip('2x3 = 6 en attente');

    describe('Array', () => {

        it('count should have 5 values', () => {
            assert.equal(data.length, 5);
        });

        it('foo === foo', () => {
            expect('foo').is.equal('foo');
        });

        it('data is array', () => {
            expect(data).to.be.an.instanceOf(Array);
        });

        it('data.length == 5 (should)', () => {
            data.should.have.lengthOf(5);
        });

        it('data.length == 5 (expect)', () => {
            expect(data).have.lengthOf(5);
        });

        it('data contains 0', () => {
            expect(data).contains(0)
        });

        it('data not contains 3', () => {
            expect(data).not.contains(3)
        });

    });

    describe('Object', () => {

        it('obj.firstname === "John"', () => {
            expect(obj).have.property('firstname').to.equal('John');
        });

        it('obj have key email, lastname, firstname', () => {
            //expect(obj).have.all.keys('email', 'lastname', 'firstname');
            expect(obj).have.all.keys('email', 'lastname', 'firstname');
        });

        it('???', () => {
            expect({ a: 1, b: 2}).to.be.an('Object').that.has.all.keys('a', 'b');
        });

    });

});
