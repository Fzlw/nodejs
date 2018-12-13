/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('syscontactway', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'sysperson',
        key: 'Id'
      }
    },
    QQ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    WeChat: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SinaBlog: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    BiliBili: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GitHub: {
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
      allowNull: false,
      defaultValue: 'system'
    }
  }, {
    tableName: 'syscontactway',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
