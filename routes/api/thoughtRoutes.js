const { getThoughts, createThought, getThoughtById, updateThought, deleteThought, createReaction, removeReaction } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(removeReaction);

module.exports = router;