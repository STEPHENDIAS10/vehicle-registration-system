const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const User = require('../../models/User');

const { ADMIN, USER } = require('../../constants/roles');

router.get('/', authorization, (req, res) => {
  if (req.user.role === USER)
    return res.status(401).send({ message: 'Access denied.' });

  User.find({})
    .then(students => res.status(200).send(students))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  if (req.user.role === USER)
    return res.status(401).send({ message: 'Access denied.' });

  User.findById(req.params.id)
    .then(User => res.status(200).send(User))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  if (req.user.role !== ADMIN)
    return res.status(401).send({ message: 'Access denied.' });

  User.deleteOne({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount.toString()))
    .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
