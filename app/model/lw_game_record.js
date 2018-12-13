/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_game_record', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    GameId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'lw_game',
        key: 'Id'
      }
    },
    VisitorId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'lw_visitor',
        key: 'Id'
      }
    },
    Score: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Valid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatePerson: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: 'system'
    },
    UpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatePerson: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: 'system'
    }
  }, {
    tableName: 'lw_game_record',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
