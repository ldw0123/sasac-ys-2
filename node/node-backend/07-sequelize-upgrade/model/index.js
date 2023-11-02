const Sequelize = require('sequelize');

const config = require('../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require('./Customer')(sequelize, Sequelize);
db.Orders = require('./Orders')(sequelize, Sequelize);

// Relation - 1:다 관계
// hasMany: 한 개의 모델(테이블)이 다른 모델과 1:다 관계를 가질 때 사용
db.Customer.hasMany(db.Orders, {
  // SQL 코드 : FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
  // onDelete: "cascade" // on delete cascade 가 있으면
  foreignKey: 'custid', // 외래키가 걸려 있는 곳
  // sourceKey: 'custid',
});

// Relation
// belongsTo : 다른 모델이 한 모델을 가리키는 1:1(1:다) 관계를 설정하는 데 사용
db.Orders.belongsTo(db.Customer, {
  // SQL 코드 : FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
  // onDelete: "cascade" // on delete cascade 가 있으면
  foreignKey: 'custid', // 외래키가 걸려 있는 곳
  // targetKey: 'custid',
});

module.exports = db;
