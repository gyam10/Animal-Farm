const UserModel = require("../models/user.model");
const slugify = require("slugify");

class UserComponent {
  register = (req, res, next) => {
    try {
      const data = req.body;
      const user = new UserModel(data);
      user.save();
      res.json({
        result: user,
        msg: "User Scuucessfully registered.",
        status: true,
      });
    } catch (error) {
      next({
        status: 500,
        msg: "User couldnot be registered.",
        error,
      });
    }
  };
}
