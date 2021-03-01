import db from '../../models/db';
import Logger from '../../config/logger';

const LOG = new Logger('student.service.js');
const Student = db.student;

export default class StudentService {

    async upsert(data) {
        try {
            const student = await Student.findOne({ where: { email: data.email } });

            if (student) {
                if (student.name != data.name) return student.update({ name: data.name });
                return student;
            }

            return Student.create({
                name: data.name,
                email: data.email
            });
        } catch (err) {
            throw err;
        }
    }

}