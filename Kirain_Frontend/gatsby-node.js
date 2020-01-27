// use this file as connector to support ES6 imports
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')
