/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_dynamic', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    HobbyId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    UserId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    Caption: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ActivityId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    Position: {
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
    tableName: 'lw_dynamic',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
