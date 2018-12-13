/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_music', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    LinkUrl: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    Singer: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'unknow'
    },
    SongName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'unknow'
    },
    IsBgMusic: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'lw_music',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
