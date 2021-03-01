import Sequelize from 'sequelize';

import sequelize from '../config/database';


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.teacher = require('./teacher.model')(sequelize, Sequelize);
db.student = require('./student.model')(sequelize, Sequelize);
db.subject = require('./subject.model')(sequelize, Sequelize);
db.class = require('./class.model')(sequelize, Sequelize);
db.student_class = require('./student_class.model')(sequelize, Sequelize);
db.teacher_subject_class = require('./teacher_subject_class.model')(sequelize, Sequelize);


db.teacher.hasMany(db.teacher_subject_class, { foreignKey: "teacherID" });
db.teacher_subject_class.belongsTo(db.teacher, { foreignKey: "ID" });

db.student.belongsToMany(db.class, { through: "student_class", foreignKey: "ID" });
db.class.belongsToMany(db.student, { through: "student_class", foreignKey: "classCode" });


export default db;