const express = require("express");
const router_bssr = express.Router();
const restaourantController = require("./controllers/restaourantController");

/**********************************
 *            BSSR EJS            *
 *********************************/

router_bssr.get("/signup", restaourantController.getSignupMyRestaourant);
router_bssr.post("/signup", restaourantController.signupProcess);

router_bssr.get("/login", restaourantController.getLoginMyRestaourant);
router_bssr.post("/login", restaourantController.loginProcess);

router_bssr.get("/logout", restaourantController.logout);


module.exports = router_bssr;
