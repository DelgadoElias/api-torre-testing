const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('experience', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    publicId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {  
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    organization: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    fMonth : {
        type: DataTypes.STRING,
    },
    fYear : {
        type: DataTypes.STRING,
    },
    tMonth : {
        type: DataTypes.STRING,
    },
    tYear : {
        type: DataTypes.STRING,
    },
    addInfo : {
        type : DataTypes.STRING
    },
    responsabilities: {
        type: DataTypes.STRING
    }
  },{timestamps : false});
};