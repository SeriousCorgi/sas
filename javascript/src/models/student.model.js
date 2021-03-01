import Class from './class.model';


module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("students", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });


    return Student;
};