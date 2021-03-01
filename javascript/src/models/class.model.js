module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define("classes", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        classCode: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });


    return Class;
};