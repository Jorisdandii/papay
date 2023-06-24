const assert = require("assert");
const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");
const { shapeIntoMongosObjectId } = require("../lib/config");

class Restaurant {
  constructor() {
    this.memberModel = MemberModel;
  }

  async getAllRestaurantsData() {
    try {
      let result = await this.memberModel
        .find({
          mb_type: "RESTAURANT",
        })
        .exec();

      assert(result, Definer.general_err1);
      return result;
    } catch (err) {
      throw err;
    }
  }
  catch(err) {
    throw err;
  }
}

module.exports = Restaurant;
