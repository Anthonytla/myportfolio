const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    description: {
        type: String,
    },
    experience: 
        { type: Schema.Types.ObjectId, ref: 'experience' },
},
    { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);