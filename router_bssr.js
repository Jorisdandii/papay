const express = require("express");
const router_bssr = express.Router();
const restaourantController = require("./controllers/restaourantController");
const productController = require("./controllers/productController");
const uploader_product = require("./utils/upload-multer")("products");

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
router_bssr.post(
  "/products/create",
  restaourantController.validateAuthRestaurant,
  uploader_product.array("product_images", 5),
  productController.addNewProducts
);
router_bssr.post("/products/edit/:id", productController.updateChosenProducts);

module.exports = router_bssr;
 