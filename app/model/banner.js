/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('banner', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    remark: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'banner'
  });

  Model.associate = function() {

  }

  return Model;
};
