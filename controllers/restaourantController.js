const Member = require("../models/Member");
const Product = require("../models/Product");

let restaourantController = module.exports;

restaourantController.home = (req, res) => {
  try {
    console.log('GET: cont/home');
    res.render('home-page');
  } catch(err) {
    console.log(`ERROR cont/home ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
}

restaourantController.getMyRestauranProducts = async (req, res) => {
  try {
    console.log("GET: cont/getMyRestauranProducts");
    const product = new Product();
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu", { restaurant_data: data });
  } catch (err) {
    console.log(`ERROR cont/getMyRestauranProducts ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaourantController.getSignupMyRestaourant = async (req, res) => {
  try {
    console.log("GET: cont/getSignupMyRestaourant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR cont/getSignupMyRestaourant ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaourantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body,
      member = new Member(),
      new_member = await member.signupData(data);

    req.session.member = new_member;
    res.redirect("/resto/products/menu");
  } catch (err) {
    console.log(`ERROR cont/signup ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaourantController.getLoginMyRestaourant = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyRestaourant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR cont/getLoginMyRestaourant ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaourantController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/resto/products/menu");
    });
  } catch (err) {
    console.log(`ERROR cont/login ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaourantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};

restaourantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      message: "only authenticated members with restaurant type",
    });
};

restaourantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succeed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};
