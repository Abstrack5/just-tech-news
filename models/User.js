const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table comlumns and configurations
User.init (
    {
        // table column definitions go here
        // define an id column
        id: {
            //use the  special Sequelize DataTypes object provide what type  of  data it is
            type: DataTypes.INTEGER,
            // this is equivalent  to SQLs NOT NULL option
            allowNull: false,
            // instruct that this is the Primary key
            primaryKey: true,
            // Turn on auto increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len:[4]
            }
        }
    },
    {
        // Table configuration options go here (https://sequelize.org/v5/manual/models-definition.html#configuration))
    
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        
        // dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,

        // dont pluralize name of database table
        freezeTableName: true,

        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,

        // make it so our model name stays lowercase in  the database
        modelName: 'user'
    }   
);

module.exports = User;