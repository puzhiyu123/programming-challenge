const assert = require('assert');
const {howManyServings} = require('./index');
const inputs = require('./inputs')

describe('Nomnomthrough', () => {
    describe('When there is no enough ingredient for one serving', () => {
    it('should return 0', () => {
        const output = howManyServings(inputs.zeroServing);
    assert.equal(output, 0);
});
});
describe('When there is enough ingredient for one serving', () => {
    it('should return 1', () => {
    const output = howManyServings(inputs.oneServing);
    assert.equal(output, 1);
});
});
describe('When there is enough ingredient for two servings', () => {
    it('should return 2', () => {
    const output = howManyServings(inputs.twoServings);
    assert.equal(output, 2);
});
});
describe('When there is enough ingredient for three servings', () => {
    it('should return 3', () => {
    const output = howManyServings(inputs.threeServings);
    assert.equal(output, 3);
});
});
describe('When there is enough ingredient for four servings', () => {
    it('should return 4', () => {
    const output = howManyServings(inputs.fourServings);
    assert.equal(output, 4);
});
});
});