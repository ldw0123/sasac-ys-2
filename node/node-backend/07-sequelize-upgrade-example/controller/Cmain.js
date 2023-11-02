const { Player, Profile, Team, Game, TeamGame } = require('../models');
const { Op } = require('sequelize');

exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getPlayer = async (req, res) => {
  console.log(req.params);
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id },
      include: [{ model: Profile, attributes: ['position', 'salary'] }],
    });

    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name,
      age,
      team_id,
    });
    console.log(newPlayer);

    res.send(newPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      {
        team_id,
      },
      { where: { player_id } },
    );
    console.log(updatedPlayer);

    res.send(updatedPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({ where: { player_id } });
    console.log(isDeleted);
    if (isDeleted) return res.send(true);
    else return res.send(false);
    // res.sendStatus(isDeleted ? 200 : 404);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getTeams = async (req, res) => {
  try {
    // const teams = await Team.findAll();
    const { sort, search } = req.query;
    console.log(req.query);
    let teams;

    if (sort === 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'ASC']],
      });
    } else if (search) {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: `%${search}%` },
          // name: { [Op.like]: "%" + search + "%"}
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }

    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id },
    });

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id },
      include: [{ model: Player }],
    });

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
