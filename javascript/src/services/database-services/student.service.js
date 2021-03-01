import db from '../../models/db';
import Logger from '../../config/logger';

const LOG = new Logger('student.service.js');
const Student = db.student;

export default class StudentService {

    async upsert(data) {
        /**
         * Update record if exist, else create new record
         */

        try {
            if (data.email == null || data.name == null) throw new db.Sequelize.DatabaseError(new Error('Missing input field'));

            const student = await Student.findOne({ where: { email: data.email } });

            if (student) {
                if (student.name != data.name) {
                    LOG.info("Updating student: " + student.name);
                    return student.update({ name: data.name });
                }
                return student;
            } else {
                LOG.info("Adding new student: " + data.name);
                return Student.create({
                    name: data.name,
                    email: data.email
                });
            }

        } catch (err) {
            throw err;
        }
    }

}