const c = {};

c.addtion = (...values) => {
    let result = 0;
    for (let value of values) {
        if (typeof value !== 'number') {
            throw new Error('NaN');
        }
        result += value;
    }

    return result;
};

module.exports = c;
