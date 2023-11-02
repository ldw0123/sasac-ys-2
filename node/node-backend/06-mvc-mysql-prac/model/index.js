const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const db = {}; // 빈 객체
// sequelize 객체를 만든다
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize };

// 풀어 쓴 거
// db.Visitor = require('./Visitor');
// db.Visitor = Visitor(sequelize, Sequelize);

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체를 담음

module.exports = db;
