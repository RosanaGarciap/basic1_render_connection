const routes = require('express').Router();
const appcontroller= require('../controllers/lesson1');

routes.get('/', appcontroller.retrieveuser('Rosana Garcia')
)
module.exports = routes;