/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_comment', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    DynamicId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    Comment: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    Position: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    VisitorId: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Approval: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
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
    tableName: 'lw_comment',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
