/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_visitor_type', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Prefix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Suffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MaxLen: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '3'
    },
    FillByte: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '0'
    },
    Remark: {
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
      allowNull: true,
      defaultValue: 'system'
    }
  }, {
    tableName: 'lw_visitor_type',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
