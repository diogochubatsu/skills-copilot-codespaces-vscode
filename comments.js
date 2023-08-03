// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const { postComment, getComment } = require('../controllers/comments');

// Import middlewares
const { isAuthenticated } = require('../middlewares/auth');

// Route for posting a comment
router.post('/:id', isAuthenticated, postComment);

// Route for getting all comments of a post
router.get('/:id', getComment);

// Export module
module.exports = router;


