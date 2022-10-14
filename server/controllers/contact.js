const Contact = require("../models/Contact")

async function createContact(req, res, next) {
    try {
        const newContact = new Contact(req.body)
        const savedContact = await newContact.save();
        res.status(200).json(savedContact)
    } catch (err) {
        next(err)
    }
};

module.exports = {
    createContact
}