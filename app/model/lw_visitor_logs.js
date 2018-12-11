/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_visitor_logs', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LandTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Position: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    WebBrowser: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WebBrowserVersion: {
      type: DataTypes.STRING(40),
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
    }
  }, {
    tableName: 'lw_visitor_logs',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
