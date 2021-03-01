import Express from 'express';

import Logger from '../config/logger';
import ClassService from '../services/database-services/class.service';
import StudentService from '../services/database-services/student.service';
import TeacherService from '../services/database-services/teacher.service';
import SubjectService from '../services/database-services/subject.service';
import db from '../models/db';


const LOG = new Logger('RegistrationController.js');
const RegistrationController = Express.Router();
const teacherService = new TeacherService();
const classService = new ClassService();
const subjectService = new SubjectService();
const studentService = new StudentService();

const registerHandler = async (req, res) => {
    LOG.info(JSON.stringify(req.body));

    const data = req.body
    try {
        let teacher = null;
        let students = [];
        let subject = null
        let class_data = null;

        if (data.teacher) { teacher = await teacherService.upsert(data.teacher) };
        if (data.students) {
            for (let i = 0; i < data.students.length; i++) {
                students.push(await studentService.upsert(data.students[i]));
            }
        }
        if (data.subject) { subject = await subjectService.upsert(data.subject) };
        if (data.class) { class_data = await classService.upsert(data.class); }

        if (data.teacher && data.subject && data.class) {
            await db.teacher_subject_class.create({
                teacherID: teacher.ID,
                subjectCode: subject.subjectCode,
                subjectName: subject.name,
                classCode: class_data.classCode
            })
        }
        if (data.students && data.class) {
            for (let i = 0; i < students.length; i++) {
                await db.student_class.create({
                    studentID: students[i].ID,
                    classCode: class_data.classCode
                })
            }
        }

        res.sendStatus(204);
    } catch (err) {
        if (err instanceof db.Sequelize.UniqueConstraintError) {
            LOG.warn(err);
            res.sendStatus(204);
        } else if (err instanceof db.Sequelize.DatabaseError) {
            LOG.error(err);
            res.sendStatus(400);
        } else {
            LOG.error(err);
            res.sendStatus(500);
        }
    }
}


RegistrationController.post('', registerHandler);

export default RegistrationController;