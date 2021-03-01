module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define("classes", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        classCode: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        timestamps: false,
    });


    return Class;
};