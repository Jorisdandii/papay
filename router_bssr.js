const express = require("express");
const router_bssr = express.Router();
const restaourantController = require("./controllers/restaourantController");
const productController = require("./controllers/productController");
const uploader_product = require("./utils/upload-multer")("products");
const uploader_members = require("./utils/upload-multer")("members");

/**********************************
 *            BSSR EJS            *
 *********************************/

router_bssr.get("/", restaourantController.home);

router_bssr
  .get("/sign-up", restaourantController.getSignupMyRestaourant)
  .post(
    "/sign-up",
    uploader_members.single("restaurant_img"),
    restaourantController.signupProcess
  );
router_bssr
  .get("/login", restaourantController.getLoginMyRestaourant)
  .post("/login", restaourantController.loginProcess);
router_bssr.get("/logout", restaourantController.logout);
router_bssr.get("/check-me", restaourantController.checkSessions);

router_bssr.get("/products/menu", restaourantController.getMyRestauranProducts);
router_bssr.post(
  "/products/create",
  restaourantController.validateAuthRestaurant,
  uploader_product.array("product_images", 5),
  productController.addNewProduct
);
router_bssr.post(
  "/products/edit/:id",
  restaourantController.validateAuthRestaurant,
  productController.updateChosenProduct
);

router_bssr.get( 
  "/all-restaurant",
  restaourantController.validateAdmin,
  restaourantController.getAllRestaurants
);

module.exports = router_bssr;
