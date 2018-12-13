/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sysperson', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LoginName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    Sex: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RegisterTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Province: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Introduce: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Position: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    HDpic: {
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
    tableName: 'sysperson',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
