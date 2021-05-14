const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
},
    { collection: 'contact' }
);

module.exports = mongoose.model('contact', contactSchema);