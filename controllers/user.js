const { response } = require("express");
const userModel = require("../models/users");

exports.getUsers = (req, res) => {
  userModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addUser = async (req, res) => {
  const user = new userModel(req.body);

  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
