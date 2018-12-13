/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lw_books', {
    Id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Pages: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '0'
    },
    AuthorId: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    BuyTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Province: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(1000),
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
    tableName: 'lw_books',
    timestamps: false
  });

  Model.associate = function() {

  }

  return Model;
};
