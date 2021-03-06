/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_dynamic_journey', {
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
    ImgGroupId: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    Describe: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(100),
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
    tableName: 'lw_dynamic_journey',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
