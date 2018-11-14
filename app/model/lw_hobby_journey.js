/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_hobby_journey', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PointOfStart: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PointOfEnd: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    JourneyId: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Background: {
      type: DataTypes.STRING(36),
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
      allowNull: false,
      defaultValue: 'system'
    }
  }, {
    tableName: 'lw_hobby_journey'
  });

  Model.associate = function() {

  }

  return Model;
};
