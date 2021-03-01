import db from '../../models/db';
import Logger from '../../config/logger';


const LOG = new Logger('class.service.js');
const Class = db.class;

export default class ClassService {

    async upsert(data) {
        /**
         * Update record if exist, else create new record
         */

        try {
            if (data.classCode == null || data.name == null) throw new db.Sequelize.DatabaseError(new Error('Missing input field'));

            const class_data = await Class.findOne({ where: { classCode: data.classCode } });

            if (class_data) {
                if (class_data.name != data.name) {
                    LOG.info("Updating class: " + class_data.name);
                    return class_data.update({ name: data.name });
                }
                return class_data;
            } else {
                LOG.info("Adding new class: " + data.name);
                return Class.create({
                    name: data.name,
                    classCode: data.classCode
                });
            }

        } catch (err) {
            throw err;
        }
    }

}