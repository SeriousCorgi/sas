import supertest from 'supertest';
import App from '../src/app';

describe("API", () => {

    it("should add a teacher", async () => {
        const res = await supertest(App)
            .post('/api/register')
            .send({
                "teacher": {
                    "name": "Test teacher",
                    "email": "test_teacher@gmail.com"
                },
                "students": [
                    {
                        "name": "Test student",
                        "email": "test_student@gmail.com"
                    }
                ],
                "subject": {
                    "subjectCode": "TEST",
                    "name": "Test subject"
                },
                "class": {
                    "classCode": "T1-1",
                    "name": "Test class"
                }
            });
        expect(res.statusCode).toEqual(204);
    })

    it("should return status code 400 when missing an input field", async () => {
        const res = await supertest(App)
            .post('/api/register')
            .send({
                "teacher": {
                    "email": "test_teacher@gmail.com"
                },
                "students": [
                    {
                        "name": "Test student",
                        "email": "test_student@gmail.com"
                    }
                ],
                "subject": {
                    "subjectCode": "TEST",
                    "name": "Test subject"
                },
                "class": {
                    "classCode": "T1-1",
                    "name": "Test class"
                }
            });
        expect(res.statusCode).toEqual(400);
    })

    it("should show all workloads of all techers", async () => {
        const res = await supertest(App).get('/api/reports/workload');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("Test teacher");
    })

});