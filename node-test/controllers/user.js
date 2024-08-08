
const User = require('../models/user');
const { validationResult } = require('express-validator');

let records = [];

module.exports.addUser = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 400,
            response: {
                error: errors.array()
            }
        });
    }
    try {
        const newRecord = req.body;

        if (!newRecord.name) {
            throw new Error('Name is required');
        }

        // Add the new record to the in-memory database
        records.push(newRecord);

        // Send standardized response
        res.status(200).json({
            status: 200,
            response: { isAdded: true }
        });
    } catch (error) {
        // Pass errors to the error handling middleware
        next(error);
    }

}
