const mongoose = require('mongoose');

const { Schema } = mongoose;

const educationSchema = new Schema({
    img : {
        type: String,
    },
    school: {
        type: String,
    },
    degree: {
        type: String,
    },
    description: {
        type: String,
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    place: {
        type: String,
    },
    not_shown: {
        type: Boolean, 
        default: false,
    },
},
    { collection: 'education' }
);

module.exports = mongoose.model('education', educationSchema);