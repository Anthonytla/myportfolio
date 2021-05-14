const mongoose = require('mongoose');
const task = require('../models/taskModel');
const experience = require('../models/experienceModel');

exports.list_all_task = (req, res) => {
    task.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    })
};

exports.create_task = (req, res) => {
    experience.findById(req.params.experienceId, function (err, exp) {
        const newTask = new task(req.body);
        newTask.save();
        experience.findByIdAndUpdate(req.params.experienceId,
            {
                $push: {
                    tasks: newTask
                }
            }, (err, exp) => {res.json(exp)})
    });

}


exports.read_a_task = (req, res) => {
    experience.findById(req.params.experienceId, (err, experience) => {
        if (err) res.send(err);
        res.json(experience)
    })
};

exports.delete_a_experience = (req, res) => {
    experience.deleteOne({ _id: req.params.experienceId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'experience successfully deleted',
            _id: req.params.experienceId
        });
    });
};