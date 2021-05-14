const mongoose = require('mongoose');
const contact = require('../models/contactModel');

exports.list_all_contacts = (req, res) => {
    contact.find({}, (err, contacts) => {
        if (err) res.send(err);
        res.json(contacts);
    })
}

exports.create_contact = (req, res) => {
    const newProject = new contact(req.body);
    newProject.save((err, contact) => {
        if (err) res.send(err);
        res.json(contact);
    })
}