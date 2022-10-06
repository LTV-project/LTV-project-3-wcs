const express = require("express");

const app = express();
app.use(express.json());

const router = express.Router();
const { sendEmail } = require("./sendEmail");

const { hashPassword, verifyPassword, verifyToken } = require("./auth");

const itemControllers = require("./controllers/itemControllers");
const gamesControllers = require("./controllers/gamesControllers");
const usersControllers = require("./controllers/usersControllers");
const lobbiesControllers = require("./controllers/lobbiesControllers");
const travelInfosControllers = require("./controllers/travelInfosControllers");
const categoryControllers = require("./controllers/categoryControllers");
const contactControllers = require("./controllers/contactControllers");
const participantsControllers = require("./controllers/participantsControllers");

router.post("/users", hashPassword, usersControllers.add, sendEmail);
router.post(
  "/login",
  usersControllers.readUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

app.use(verifyToken); // authentication wall : verifyToken is activated for each route after this line

// GET
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.get("/lobbies", lobbiesControllers.browse);
router.get(
  "/joinlobbies",
  lobbiesControllers.browseLobbiesByCategoryWithTravelInfosAndCreator
);
router.get("/lobbies/:id", lobbiesControllers.readLobbyCreateByUser);
router.get("/lobbies/:id/participants", participantsControllers.browse);
router.get("/lobbies-test/:id", lobbiesControllers.read);
router.get("/travel_info", travelInfosControllers.browse);
router.get("/travel_info/:id", travelInfosControllers.read);
router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.get("/contacts", contactControllers.browse);
router.get("/contacts/:id", contactControllers.read);

// UPDATE
router.put("/items/:id", itemControllers.edit);
router.put("/games/:id", gamesControllers.edit);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.put("/lobbies/:id", lobbiesControllers.edit);
router.put("/travel_info/:id", travelInfosControllers.edit);
router.put("/category/:id", categoryControllers.edit);
router.put("/contacts/:id", contactControllers.edit);

// CREATE
router.post("/items", itemControllers.add);
router.post("/games", gamesControllers.add);
router.post("/lobbies", lobbiesControllers.add);
router.post("/travel_info", travelInfosControllers.add);
router.post("/category", categoryControllers.add);
router.post("/contacts", contactControllers.add);
router.post("/participants", participantsControllers.add);

// DELETE
router.delete("/items/:id", itemControllers.destroy);
router.delete("/games/:id", gamesControllers.destroy);
router.delete("/users/:id", usersControllers.destroy);
router.delete("/lobbies/:id", lobbiesControllers.destroy);
router.delete("/travel_info/:id", travelInfosControllers.destroy);
router.delete("/category/:id", categoryControllers.destroy);
router.delete("/contacts/:id", contactControllers.destroy);

module.exports = router;
