const express = require("express");

const app = express();

app.use(express.json());

const router = express.Router();

const { hashedPassword, verifyPassword, verifyToken } = require("./auth");

const itemControllers = require("./controllers/itemControllers");
const gamesControllers = require("./controllers/gamesControllers");
const usersControllers = require("./controllers/usersControllers");
const lobbiesControllers = require("./controllers/lobbiesControllers");
const travelInfosControllers = require("./controllers/travelInfosControllers");
const categoryControllers = require("./controllers/categoryControllers");
const imagesControllers = require("./controllers/imagesControllers");

// GET
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.get("/lobbies", lobbiesControllers.browse);
router.get("/lobbies/:id", lobbiesControllers.read);
router.get("/travel_info", travelInfosControllers.browse);
router.get("/travel_info/:id", travelInfosControllers.read);
router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.get("/images", imagesControllers.browse);
router.get("/images/:id", imagesControllers.read);
router.post(
  "/users",
  hashedPassword,
  verifyPassword,
  verifyToken,
  usersControllers.add
);

app.use(verifyToken);

// UPDATE
router.put("/items/:id", itemControllers.edit);
router.put("/games/:id", gamesControllers.edit);
router.put("/users/:id", usersControllers.edit);
router.put("/lobbies/:id", lobbiesControllers.edit);
router.put("/travel_info/:id", travelInfosControllers.edit);
router.put("/category/:id", categoryControllers.edit);
router.put("/images/:id", imagesControllers.edit);

// CREATE
router.post("/items", itemControllers.add);
router.post("/games", gamesControllers.add);
router.post("/lobbies", lobbiesControllers.add);
router.post("/travel_info", travelInfosControllers.add);
router.post("/category", categoryControllers.add);
router.post("/images", imagesControllers.add);

// DELETE
router.delete("/items/:id", itemControllers.destroy);
router.delete("/games/:id", gamesControllers.destroy);
router.delete("/users/:id", usersControllers.destroy);
router.delete("/lobbies/:id", lobbiesControllers.destroy);
router.delete("/travel_info/:id", travelInfosControllers.destroy);
router.delete("/category/:id", categoryControllers.destroy);
router.delete("/images/:id", imagesControllers.destroy);

module.exports = router;
