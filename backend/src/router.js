/* eslint-disable import/no-unresolved */
const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const gamesControllers = require("./controllers/gamesControllers");
const usersControllers = require("./controllers/usersControllers");
const lobbiesControllers = require("./controllers/lobbiesControllers");

// GET
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.get("/lobbies", lobbiesControllers.browse);
router.get("/lobbies/:id", lobbiesControllers.read);

// UPDATE
router.put("/items/:id", itemControllers.edit);
router.put("/games/:id", gamesControllers.edit);
router.put("/users/:id", usersControllers.edit);
router.put("/lobbies/:id", lobbiesControllers.edit);

// CREATE
router.post("/items", itemControllers.add);
router.post("/games", gamesControllers.add);
router.post("/users", usersControllers.add);
router.post("/lobbies", lobbiesControllers.add);

// DELETE
router.delete("/items/:id", itemControllers.destroy);
router.delete("/games/:id", gamesControllers.destroy);
router.delete("/users/:id", usersControllers.destroy);
router.delete("/lobbies/:id", lobbiesControllers.destroy);

module.exports = router;
