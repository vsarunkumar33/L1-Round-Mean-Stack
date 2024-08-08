const express = require('express');
const router = express.Router();


const userController = require('../controllers/user');

router.get('/add', userController.addUser);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 500,
        response: 'Error'
    });
});


module.exports = router;