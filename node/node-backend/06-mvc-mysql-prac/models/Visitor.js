// 테이블의 구조를 정의
// orm : 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음

function Visitor(Sequelize, DataTypes) {
  // define 함수에는 인자가 3개 들어간다
  return Sequelize.define(
    // 모델(테이블) 정의. sequelize 객체의 define 메서드를 이용해서 정의함
    'user', // param1: 테이블 이름
    // param2: 컬럼 정의
    {
      id: {
        // int NOT NULL AUTO_INCREMENT PRIMARY KEY
        type: DataTypes.INTEGER, // type, allowNull, primaryKey, autoIncrement은 정해져 있는 키값이므로 수정x
        allowNull: false, // allowNull은 true가 기본값
        primaryKey: true, // primaryKey은 false가 기본값
        autoIncrement: true, // autoIncrement은 false가 기본값
      },
      userid: {
        type: DataTypes.STRING(20),
      },
      username: {
        type: DataTypes.STRING(10), // string 타입 10글자 제한
        // allowNull: true, // true가 기본값이므로 생략o
      },
      pw: {
        type: DataTypes.STRING(20),
        // allowNull: true,
      },
    },
    // param3: 모델 옵션 정의
    {
      tablaName: 'user',
      freezeTableName: true,
      // sequelize에서 간혹, 단수로 지정해 둔 테이블 이름을 sql문을 날릴 때 (user와 같은)복수로 변경해버리는 경우가 있음
      // ex) insert into user ~~ => create() => insert into user ~~~
      timestamps: false,
      // insert, update시에 그 시간을 자동으로 저장하겠다 -> 저장하는 것이 기본값
      // creatAt, updateAt 이라는 컬럼에 자동으로 저장
      // 저장하지 마! => false로 지정
    }
  );
}

module.exports = user;
