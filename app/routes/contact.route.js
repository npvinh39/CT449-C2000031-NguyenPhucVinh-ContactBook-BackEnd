const express = require('express');
const contacts = require('../controllers/contact.controller');

const router = express.Router();

router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route('/favorite')
    .get(contacts.findAllFavorite);

router.route('/:id')
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

// router.route('/favorite')
//     .get(contacts.All_FAVORITE)
//     .post((req,res,next) => {
//         if (!req.headers['authorization'])
//             return res.status(401).send({ message: 'Unauthorized request. Missing authentication header' });
//         next();
//     }, contacts.CREATE);
module.exports = router;