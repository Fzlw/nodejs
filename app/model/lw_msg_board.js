/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_msg_board', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: '',
      references: {
        model: 'lw_visitor',
        key: 'Id'
      }
    },
    Content: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(200),
      allowNull: false
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
    tableName: 'lw_msg_board',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
