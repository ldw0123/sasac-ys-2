const Sequelize = require('sequelize')
const config = require('../config/config.json')['development']
const db = {}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

// 모델 모듈 불러오기
const PlayerModel = require('./Player')(sequelize, Sequelize)
const ProfileModel = require('./Profile')(sequelize, Sequelize)
const TeamModel = require('./Team')(sequelize, Sequelize)
const GameModel = require('./Game')(sequelize, Sequelize)
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize)

// 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, {
  // delete, update cascade setting
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  // fk 이름 다르게 설정 (else fk name is 'PlayerPlayerId')
  foreignKey: 'player_id',
  sourceKey: 'player_id',
})
ProfileModel.belongsTo(PlayerModel, {
  // fk 이름 다르게 설정 (else fk name is 'PlayerPlayerId')
  foreignKey: 'player_id',
  targetKey: 'player_id',
})

// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
TeamModel.hasMany(PlayerModel, {
  foreignKey: 'team_id',
  sourceKey: 'team_id',
})
PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'team_id',
  targetKey: 'team_id',
})

// 3) Team : Game = N : M
// 하나의 팀은 여러 개의 경기를 할 수 있고, 한 경기에는 여러 팀(해당 프로젝트에서는 항상 2팀)이 참여
// 다대다 관계에서는 중계 테이블(TeamGame)을 이용해 두 테이블의 관계를 표현
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: 'team_id', // Custom foreign key for TeamModel
  otherKey: 'game_id', // Custom foreign key for GameModel
})
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: 'game_id', // Custom foreign key for GameModel
  otherKey: 'team_id', // Custom foreign key for TeamModel
})

db.Player = PlayerModel
db.Profile = ProfileModel
db.Team = TeamModel
db.Game = GameModel
db.TeamGame = TeamGameModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

/*

foreignKey, sourceKey, targetKey, otherKey는 Sequelize에서 모델 간 관계를 정의할 때 사용되는 키 값입니다. 
이들은 데이터베이스 테이블 간의 외래 키(Foreign Key) 관계를 설정하는 데 사용됩니다. 아래에서 각각의 의미와 역할을 자세히 설명하겠습니다.

foreignKey:
foreignKey는 현재 모델에서 외래 키(Foreign Key)로 사용될 컬럼을 지정합니다.
관계를 형성하는 다른 모델과의 연결에 대한 외래 키 컬럼을 명시적으로 지정할 수 있습니다.
이를 통해 기본적으로 생성되는 외래 키 이름 대신 원하는 컬럼 이름을 사용할 수 있습니다.

sourceKey:
sourceKey는 현재 모델과 연결된 다른 모델에서 찾아야 하는 소스(원본) 컬럼을 지정합니다.
보통 기본적으로 생성되는 외래 키인 경우, 해당 컬럼이 소스(원본) 컬럼이 됩니다.
하지만, 원하는 다른 컬럼을 소스(원본) 컬럼으로 사용하고자 할 때 명시적으로 지정할 수 있습니다.

targetKey:
targetKey는 현재 모델과 연결된 다른 모델에 있는 대상(Target) 컬럼을 지정합니다.
보통 기본적으로 생성되는 와일드카드(fk_name + id 등)가 아닌 다른 대상(Target) 컬럼을 사용하고자 할 때 명시적으로 지정할 수 있습니다.

otherKey:
M:N (다대다) 관계에서만 해당됩니다.
중간(joining) 모델에 있는 타겟(Target)컬럼을 나타냅니다.
즉, 두 개의 M:N 관계를 맺고 있는 중간(joining table 또는 model)에서 타겟(Target: 해당 예제에서 TeamGameModel 에서 game_id 가 해당됨.)커맨드로 쓰입니다.
위 설명은 Sequelize에서 일반적으로 사용되는 용어 및 규칙에 따라 해석한 것입니다. 그러나 실제 프로젝트나 데이터베이스 스키마에 따라 조금씩 달라질 수도 있으므로, 실제 코드와 데이터베이스 구조에 맞게 설정해야 합니다.

Sequelize 문서 (https://sequelize.org/master/manual/associations.html#foreign-keys_1 ) 에서도 이러한 용어들과 함께 자세한 내용 및 예제를 확인하실 수 있으니 찾아보시면 도움이 될 것입니다

*/
