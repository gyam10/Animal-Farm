const AnimalModel = require("../models/animal.model");
const slugify = require("slugify");

class AnimalComponents {
  constructor() {
    this.ani_service = new AnimalService();
  }

  addAnimal = async (req, res, next) => {
    try {
      let data = req.body;
      let checkData = this.ani_service.validateData(data);

      data.slug = slugify(data.title.toLowerCase());
      let animal = new AnimalModel(data);
      let ack = await animal.save();

      res.json({
        result: data,
        msg: "Animal added successfully.",
        status: true,
      });
    } catch (err) {
      next({
        status: 500,
        msg: err,
      });
    }
  };
}
