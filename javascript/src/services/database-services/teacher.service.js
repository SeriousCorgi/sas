import db from '../../models/db';
import Logger from '../../config/logger';

const LOG = new Logger('teacher.service.js');
const Teacher = db.teacher;
const TSC = db.teacher_subject_class;


export default class TeacherService {

    async upsert(data) {
        try {
            const teacher = await Teacher.findOne({ where: { email: data.email } });

            if (teacher) {
                if (teacher.name != data.name) return teacher.update({ name: data.name });
                return teacher;
            }

            return Teacher.create({
                name: data.name,
                email: data.email
            });
        } catch (err) {
            throw err;
        }
    }

    async fetchAll() {
        try {

            return Teacher.findAll({
                attributes: [
                    'name',
                    [db.Sequelize.col('teacher_subject_classes.subjectCode'), 'subjectCode'],
                    [db.Sequelize.col('teacher_subject_classes.subjectName'), 'subjectName'],
                    [db.Sequelize.fn('COUNT', 'teacher_subject_classes.classCode'), 'numberOfClasses'],
                ],
                include: [{
                    model: TSC,
                    as: 'teacher_subject_classes',
                    attributes: []
                }],
                group: ['teachers.ID', 'subjectCode', 'subjectName'],
                raw: true,
            })


        } catch (err) {
            throw err;
        }
    }

}