/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_dynamic_daily', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    ImgGroupId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: ''
    },
    Content: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(200),
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
    tableName: 'lw_dynamic_daily',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
