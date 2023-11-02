function Customer(Sequelize, DataTypes) {
  return Sequelize.define(
    'customer', // 모델 이름 설정
    {
      // 컬럼 정의
      custid: {
        // string타입 10글자 제한
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      custname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      addr: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(11),
      },
      birth: {
        type: DataTypes.DATE,
      },
    },
    {
      // 모델 옵션 정의
      tableName: 'customer',
      freezeTableName: true, // table 이름 복수로 설정 금지
      timestamps: false,
    }
  );
}

module.exports = Customer;
