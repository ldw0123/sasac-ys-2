function Orders(Sequelize, DataTypes) {
  return Sequelize.define(
    'Orders', // 모델 이름 설정
    {
      // 컬럼 정의
      orderid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // 모델 옵션 정의
      tableName: 'orders',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = Orders;
