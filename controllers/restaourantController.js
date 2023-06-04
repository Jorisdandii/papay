const Member = require("../models/Member");

let restaourantController = module.exports;
restaourantController.getMyRestaurantData = async (req, res) => {
  try {
    console.log("GET: cont/getMyRestaurantData");
    //TODO: Get my restaurant products

    res.render("restaurant-menu");
  } catch (err) {
    console.log(`ERROR cont/getMyRestaurantData ${err.message}`);
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

restaourantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "succeed", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};
