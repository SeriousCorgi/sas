import sequelize from '../config/database';

module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define("subjects", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        subjectCode: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        timestamps: false,
    });

    return Subject;
};