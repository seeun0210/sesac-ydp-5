const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize'); //sequelize에서 지원하는 연산 사용가능
// TODO: 컨트롤러
exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params; //route에서 param
    const player = await Player.findOne({
      where: { player_id: player_id },
    });
    res.send(player);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    //req.body에 정보가 담겨있다
    //겍채 구조분해
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer); //front로 생성된 newPlayer를 보냄
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params; //:player_id니까 params에 들어있음
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      { team_id: team_id },
      { where: { player_id: player_id } }
    ); // player_id가 player_id인 선수에 대해서 team_id를 team_id로 바꾸겠다
    res.send(updatedPlayer); //성공시 [1],실패시ㅏ[0]==>프론트에서는 1이냐 0이냐에따라 ..
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id: player_id },
    });
    console.log(isDeleted); //성공시 1, 실패시 0
    if (isDeleted) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.getTeams = async (req, res) => {
  try {
    //쿼리 스트링 꺼내오기(req.query)
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;
    //sort 키가 있으면 name 기준 오름차순 정렬
    if (sort === 'name_asc') {
      teams = await Team.findAll({
        order: [['name', 'ACS']],
        attributes: ['team_id', 'name'],
      });
    } else if (search) {
      //search key에 대한 값이 있다면
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: { name: { [Op.like]: `%${search}%` } },
      });
    }
    res.send(teams);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id },
      //findAll({attributes:['보내고 싶은 정보']})
      attributes: ['team_id', 'name'], //여기서는 team_id랑 name만 보내고 싶다
    });
    res.send(team);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id },
      //team이라는 model에  Player 정보를 묶겠다.(join 같은 역할)
      include: [{ model: Player }],
      //findAll({attributes:['보내고 싶은 정보']})
      attributes: ['team_id', 'name'], //여기서는 team_id랑 name만 보내고 싶다
    });
    res.send(team);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};
