const { Router } = require('express');
const postActivity = require('./controllers/createActivity');
const getActivity = require('./controllers/getActivity');
const getDataCountries = require('./controllers/getData');
const getDataById = require('./controllers/getDataById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', getDataCountries);
router.get('/countries/:id', getDataById);
router.get('/activity', getActivity);
router.post('/activity', postActivity);

module.exports = router;
