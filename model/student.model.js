const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    productName: {
        type: String
    },
    weight: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('StudentSchema', studentSchema)