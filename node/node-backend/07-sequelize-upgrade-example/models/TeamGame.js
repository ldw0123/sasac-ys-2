const TeamGameModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'team_game',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  )
}

module.exports = TeamGameModel
