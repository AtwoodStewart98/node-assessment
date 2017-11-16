const userData = require("./userData.json");

const getUsers = (req, res, next) => {
  if (req.query.age) {
    res.status(200).json(userData.filter(val => val.age < req.query.age));
    return;
  }
  if (req.query.lastname) {
    res
      .status(200)
      .json(userData.filter(val => val.last_name === req.query.lastname));
    return;
  }
  if (req.query.email) {
    res.status(200).json(userData.filter(val => val.email === req.query.email));
    return;
  }
  if (req.query.favorites) {
    res
      .status(200)
      .json(
        userData.filter(val => val.favorites.includes(req.query.favorites))
      );
    return;
  } else return res.status(200).json(userData);
};

const getUserId = (req, res, next) => {
  if (req.params.id) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].id == req.params.id) {
        res.status(200).json(userData[i]);
        return;
      }
    }
    return res.status(404).json(null);
  }
};

const getAdmins = (req, res, next) => {
  res.status(200).json(userData.filter(val => val.type === "admin"));
  return;
};

const getLosers = (req, res, next) => {
  res.status(200).json(userData.filter(val => val.type !== "admin"));
  return;
};

const getUserType = (req, res, next) => {
  res.status(200).json(userData.filter(val => val.type === req.params.type));
};

const putUsers = (req, res, next) => {
  if (req.params.id) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].id == req.params.id) {
        userData[i] = req.body;
        return res.status(200).json(userData);
      }
    }
  }
};

const postUsers = (req, res, next) => {
  let newId = userData.length + 1;
  req.body.id = newId;
  userData.push(req.body);
  return res.status(200).json(userData);
};

const deleteUsers = (req, res, next) => {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].id == req.params.id) {
      delete userData[i];
    }
  }
  return res.status(200).json(
    userData.filter(val => {
      return val !== null;
    })
  );
};

module.exports = {
  getUsers,
  getUserId,
  getAdmins,
  getLosers,
  getUserType,
  putUsers,
  postUsers,
  deleteUsers
};
