const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema({
    img : {
        type: String,
    },
    title: {
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
    tasks: 
        [],
},
    { collection: 'experience' }
);

module.exports = mongoose.model('experience', experienceSchema);