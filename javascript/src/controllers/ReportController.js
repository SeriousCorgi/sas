import Express from 'express';

import Logger from '../config/logger';
import TeacherService from '../services/database-services/teacher.service'
import SubjectService from '../services/database-services/subject.service'


const LOG = new Logger('ReportController.js');
const ReportController = Express.Router();
const teacherService = new TeacherService();

const reportHandler = async (req, res) => {
    try {
        const reports = {}
        const teachers = await teacherService.fetchAll();

        for (let i = 0; i < teachers.length; i++) {
            LOG.info(JSON.stringify(teachers[i]));
            reports[teachers[i].name] = reports[teachers[i].name] || [];
            reports[teachers[i].name].push({
                subjectCode: teachers[i].subjectCode,
                subjectName: teachers[i].subjectName,
                numberOfClasses: teachers[i].numberOfClasses
            })
        };

        res.status(200).json(reports);
    } catch (err) {
        LOG.error(err);
        res.sendStatus(500);
    }
}


ReportController.get('/workload', reportHandler);

export default ReportController;
