const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    picture: {
        type: String,
    },
    date_created: {
        type: Date,
    },
    date_update: {
        type: Date,
    },
    enabled: {
        type: Boolean, default: true
    }
}, {collection: 'project'}
)

module.exports = mongoose.model('project', projectSchema);
