const express = require('express');
const { createResource, getResources, getResourceById, updateResources, deleteResource} = require('../Controllers/resourceControllers');
const { handleAuth } = require('../Middleware/authMiddleware');
const { restrictTo } = require('../Middleware/roleMiddleware');
const { uploadResourceImage } = require('../Middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getResources);
router.get('/:id', getResourceById);
router.post('/', handleAuth, restrictTo(['Admin']), uploadResourceImage, createResource);
router.put('/:id', handleAuth, restrictTo(['Admin']), updateResources);
router.delete('/:id', handleAuth, restrictTo(['Admin']), deleteResource);

module.exports = router;