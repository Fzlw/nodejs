/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_imgs', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    GroupId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: ''
    },
    Url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsTimeLimit: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    EffectiveStartTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EffectiveEndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Describe: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Remark: {
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
    tableName: 'lw_imgs',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
