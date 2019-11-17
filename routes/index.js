//natives
const express = require('express');
const router = express.Router();

//controllers
const index_controller = require('../controllers/index');

/* GET gerador de chave. */
router.get('/', index_controller.lerCert);

/* POST enviar form. */
// router.post('/', upload.single('arquivo'), index_controller.post);

module.exports = router;