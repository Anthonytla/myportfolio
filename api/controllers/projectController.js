const mongoose = require('mongoose');
const project = require('../models/projectModel');

exports.list_all_projects = (req, res) => {
    project.find({}, (err, projects) => {
        if (err) res.send(err);
        res.json(projects);
    })
}

exports.create_project = (req, res) => {
    const newProject = new project(req.body);
    newProject.save((err, project) => {
        if (err) res.send(err);
        res.json(project);
    })
}

exports.read_a_project = (req, res) => {
    project.findById(req.params.projectId, (err, project) => {
        if (err) res.send(err);
        res.json(project)
    })
};

exports.delete_a_project = (req, res) => {
    const id = req.params.projectId;

  Project.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
}
exports.update_a_project = (req, res) => {
    const id = req.params.projectId;
    project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Project with id=${id}. Maybe Project was not found!`
                });
            } else res.send({ message: "Project was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Project with id=" + id
            });
        });
};