const education = require('../models/educationModel');

exports.list_all_education = (req, res) => {
  education.find({}, (err, educations) => {
    if (err) res.send(err);
    res.json(educations);
  })
};

exports.create_education = (req, res) => {
  const newExperience = new education(req.body);
  newExperience.save((err, education) => {
    if (err) res.send(err);
    res.json(education);
  })
};

exports.read_a_education = (req, res) => {
  education.findById(req.params.educationId, (err, education) => {
    if (err) res.send(err);
    res.json(education)
  })
};

exports.delete_a_education = (req, res) => {
  education.deleteOne({ _id: req.params.educationId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'education successfully deleted',
      _id: req.params.educationId
    });
  });
};

exports.update_a_education = (req, res) => {
  const id = req.params.educationId;
  education.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Education with id=${id}. Maybe Education was not found!`
        });
      } else res.send({ message: "Education was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Education with id=" + id
      });
    });
};