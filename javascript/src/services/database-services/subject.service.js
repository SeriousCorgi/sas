import db from '../../models/db';

const Subject = db.subject;

export default class SubjectService {

    async upsert(data) {
        try {
            const subject = await Subject.findOne({ where: { subjectCode: data.subjectCode } });

            if (subject) {
                if (subject.name != data.name) return subject.update({ name: data.name });
                return subject;
            };

            return Subject.create({
                name: data.name,
                subjectCode: data.subjectCode
            });
        } catch (err) {
            throw err;
        }
    }

}