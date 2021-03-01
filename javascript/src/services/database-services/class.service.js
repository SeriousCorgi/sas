import db from '../../models/db';

const Class = db.class;

export default class ClassService {

    async upsert(data) {
        try {
            const class_data = await Class.findOne({ where: { classCode: data.classCode } });

            if (class_data) {
                if (class_data.name != data.name) return class_data.update({ name: data.name });
                return class_data;
            };

            return Class.create({
                name: data.name,
                classCode: data.classCode
            });
        } catch (err) {
            throw err;
        }
    }

}