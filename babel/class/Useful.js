// module npm -> node package manager
// https://docs.npmjs.com/creating-and-publishing-scoped-public-packages

class Useful {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

module.exports = Useful;
