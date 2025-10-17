const express = require('express');
const router = express.Router();
const controllers = require ('../controllers/authorController');

router.get('/',controllers.all);
router.post('/:id',controllers.add);
router.put('/:id',controllers.modify);
router.delete('/:id',controllers.drop);

module.exports = router;
