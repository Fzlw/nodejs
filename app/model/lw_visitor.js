/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_visitor', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    UserTypeId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'lw_visitor_type',
        key: 'Id'
      }
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    Mobile: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    Sex: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Province: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LandTime: {
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
    tableName: 'lw_visitor',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
