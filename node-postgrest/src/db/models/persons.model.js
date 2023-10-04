const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        }
    }
} 

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },

    address:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address'
    }
  
}

module.exports = { Person, PersonSchema };