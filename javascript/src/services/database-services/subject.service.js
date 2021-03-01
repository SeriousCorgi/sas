import db from '../../models/db';
import Logger from '../../config/logger';


const LOG = new Logger('subject.service.js');
const Subject = db.subject;

export default class SubjectService {

    async upsert(data) {
        /**
         * Update record if exist, else create new record
         */

        try {
            if (data.subjectCode == null || data.name == null) throw new db.Sequelize.DatabaseError(new Error('Missing input field'));

            const subject = await Subject.findOne({ where: { subjectCode: data.subjectCode } });

            if (subject) {
                if (subject.name != data.name) {
                    LOG.info("Updating subject: " + subject.name);
                    return subject.update({ name: data.name });
                }
                return subject;
            } else {
                LOG.info("Adding new subject: " + data.name);
                return Subject.create({
                    name: data.name,
                    subjectCode: data.subjectCode
                });
            }

        } catch (err) {
            throw err;
        }
    }

}