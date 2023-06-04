let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("GET: cont/getAllProducts");
  } catch (err) {
    console.log(`ERROR cont/getAllProducts ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

productController.addNewProducts = async (req, res) => {
  try {
    console.log("POST: cont/addNewProducts");
    // TODO product creation develop

    res.send("ok")
} catch (err) {
    console.log(`ERROR cont/addNewProducts ${err.message}`);
  }
};

productController.updateChosenProducts = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProducts");
  } catch (err) {
    console.log(`ERROR cont/updateChosenProducts ${err.message}`);
  }
};
