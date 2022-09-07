const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const lobbiesControllers = require("./controllers/lobbiesControllers");

//READ
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/lobbies", lobbiesControllers.browse);
router.get("/lobbies/:id", lobbiesControllers.read);

//UPDATE
router.put("/items/:id", itemControllers.edit);
router.put("/lobbies/:id", lobbiesControllers.edit);

//CREATE
router.post("/items", itemControllers.add);
router.post("/lobbies", lobbiesControllers.add);

//DELETE
router.delete("/items/:id", itemControllers.destroy);
router.delete("/lobbies/:id", lobbiesControllers.destroy);

module.exports = router;
