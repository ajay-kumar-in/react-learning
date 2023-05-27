"use strict"

module.exports = (sequelize, DataTypes)=> {
    let product = sequelize.define( 'products', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
            type: DataTypes.STRING,
            require: true
        },
        description: {
            type: DataTypes.STRING,
            require: true
        },

        originalPrice: {
            type: DataTypes.INTEGER,
            require: true
        },

        discount: {
            type: DataTypes.INTEGER,
            require: true
        },

        category: {
            type: DataTypes.STRING,
            require: true
        },

        imagePath: {
            type: DataTypes.STRING,
            require: true,
        },

        status: {
            type: DataTypes.BOOLEAN,
            require: true
        }

    }, {
        freezeTableName: true
    })

    return product;

}