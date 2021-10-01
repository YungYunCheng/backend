import express from 'express';
import * as uomPartController from '../../controllers/uomPartController.js';

const router = express.Router();

router.get('/', uomPartController.getAllUOM);
router.get('/:id', uomPartController.getById);
router.post('/', uomPartController.postUOM);
router.put('/:id', uomPartController.updateUOM);

export default router;
