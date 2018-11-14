/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_support', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    Support: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Against: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    DynamicId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    VisitorId: {
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
      allowNull: true,
      defaultValue: 'system'
    }
  }, {
    tableName: 'lw_support',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
