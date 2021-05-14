const mongoose = require('mongoose');
const experience = require('../models/experienceModel');

exports.list_all_experience = (req, res) => {
  experience.find({}, (err, experiences) => {
    if (err) res.send(err);
    res.json(experiences);
  })
};

exports.create_experience = (req, res) => {
  const newExperience = new experience(req.body);
  newExperience.save((err, experience) => {
    if (err) res.send(err);
    res.json(experience);
  })
};

exports.read_a_experience = (req, res) => {
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

exports.update_a_experience = (req, res) => {
  const id = req.params.experienceId;
  experience.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};