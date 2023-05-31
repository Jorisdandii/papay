const Member = require("../models/Member")

let restaourantController = module.exports;

restaourantController.getSignupMyRestaourant = async (req, res) => {
  try {
     console.log("GET: cont/getSignupMyRestaourant");
    res.render('signup');
  } catch(err) {
    console.log(`ERROR cont/getSignupMyRestaourant ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
}

restaourantController.signupProcess = async (req, res) => {
   try {
     console.log("POST: cont/signup");
     const data = req.body,
     member = new Member(),
     new_member =  await  member.siggnupData(data);

    res.json({state: 'succeed', data: new_member});
   } catch (err) {
     console.log(`ERROR cont/signup ${err.message}`);
     res.json({ state: 'fail', message: err.message });
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
     result =  await  member.loginData(data);

    res.json({state: 'succeed', data: result});
   } catch (err) {
     console.log(`ERROR cont/login ${err.message}`);
     res.json({ state: 'fail', message: err.message });
   }
};

restaourantController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifadasiz");
};
