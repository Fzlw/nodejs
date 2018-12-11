/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_weather', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    Province: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AdCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    Weather: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Temperature: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    MinTemperature: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    MaxTemperature: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    WindDirection: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    WindPower: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ReportTime: {
      type: DataTypes.DATE,
      allowNull: false
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
    }
  }, {
    tableName: 'lw_weather',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
