const express = require('express');
const router = express.Router();
const {
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    createBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamp');

router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:campId')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);



module.exports = router;