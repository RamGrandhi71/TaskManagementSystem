const express = require("express");
const router = express.Router();
const ToDo = require("../models/ToDo");
const requiresAuth = require("../middleware/permissions");



router.get("/test", (req, res) => {
  res.send("ToDo's route working");
});


router.post("/new", requiresAuth, async (req, res) => {
  try {
   /* const { isValid, errors } = validateToDoInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }*/ 

    // create a new todo
    const newToDo = new ToDo({
      user: req.user._id,
      content: req.body.content,
      complete: false,
    });

    // save the new todo
    await newToDo.save();

    return res.json(newToDo);
  } catch (err) {
    console.log(err);

    return res.status(500).send(err.message);
  }
});

 

module.exports = router;