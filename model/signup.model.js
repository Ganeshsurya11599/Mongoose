const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let signSchema = new Schema({
    username: {
        type: String
    },
    emailid: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'signup'
})

module.exports = mongoose.model('SignSchema', signSchema)