const models = require("../models");

const browse = (req, res) => {
  models.lobbies
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseLobbiesByCategoryWithTravelInfosAndCreator = (req, res) => {
  models.lobbies
    .findLobbiesByCategoryWithTravelInfosAndCreator()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.lobbies
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// Pour créer la route de la table de jointure participants entre users et lobbies
const readLobbyByCategoryWithTravelInfosAndCreator = (req, res) => {
  models.lobbies
    .findLobbyCreateByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readLobbyCreatedByUser = (req, res) => {
  models.lobbies
    .findLobbyCreatedByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const lobbies = req.body;

  // TODO validations (length, format...)

  lobbies.id = parseInt(req.params.id, 10);

  models.lobbies
    .update(lobbies)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const lobbies = req.body;

  // TODO validations (length, format...)

  models.lobbies
    .insert(lobbies)
    .then(([result]) => {
      res
        .location(`/lobbies/${result.insertId}`)
        .status(201)
        .send(`${result.insertId}`);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.lobbies
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  browseLobbiesByCategoryWithTravelInfosAndCreator,
  read,
  readLobbyCreatedByUser,
  readLobbyByCategoryWithTravelInfosAndCreator,
  edit,
  add,
  destroy,
};
