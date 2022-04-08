const Router = require('express').Router;
const UserController = require('../controllers/user-controller');
const TableController = require('../controllers/table-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration', 
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}),
  UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/table', TableController.create);
router.get('/table', TableController.getAll);
router.get('/table/:id', TableController.getOne);
router.put('/table', TableController.update);
//router.patch('/table/:id', TableController.putData);
router.delete('/table/:id', TableController.delete);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, UserController.getUsers);

module.exports = router;


