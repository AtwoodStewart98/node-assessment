const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.json());

const usersCtrl = require("./usersCtrl");

app.get("/api/users", usersCtrl.getUsers);
app.get("/api/users/:id", usersCtrl.getUserId);
app.get("/api/admins", usersCtrl.getAdmins);
app.get("/api/nonadmins", usersCtrl.getLosers);
app.get("/api/user_type/:type", usersCtrl.getUserType);

app.put("/api/users/:id", usersCtrl.putUsers);

app.post("/api/users", usersCtrl.postUsers);

app.delete("/api/users/:id", usersCtrl.deleteUsers);

app.listen(port, (req, res, next) => {
  console.log(`It's over ${port}!`);
});
