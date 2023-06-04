const express = require("express");
const router_bssr = express.Router();
const restaourantController = require("./controllers/restaourantController");

/**********************************
 *            BSSR EJS            *
 *********************************/

router_bssr
  .get("/signup", restaourantController.getSignupMyRestaourant)
  .post("/signup", restaourantController.signupProcess);
router_bssr
  .get("/login", restaourantController.getLoginMyRestaourant)
  .post("/login", restaourantController.loginProcess);
router_bssr.get("/logout", restaourantController.logout);
router_bssr.get("/check-me", restaourantController.checkSessions);


router_bssr.get("/products/menu", restaourantController.getMyRestaurantData);

module.exports = router_bssr;
