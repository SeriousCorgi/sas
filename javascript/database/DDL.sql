CREATE DATABASE sas;


CREATE TABLE teacher (
    ID int NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    
    PRIMARY KEY (ID)
);


CREATE TABLE student(
    ID int NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,

    PRIMARY KEY (ID)
);


CREATE TABLE subject (
    ID int NOT NULL,
    subjectCode varchar(30) NOT NULL UNIQUE,
    name varchar(255) NOT NULL,

    PRIMARY KEY (ID)
);


CREATE TABLE class (
    ID int NOT NULL,
    classCode varchar(30) NOT NULL UNIQUE,
    name varchar(255) NOT NULL,

    PRIMARY KEY (ID)
);


/* Relationship tables */
CREATE TABLE teacher_subject_class (
    teacherID int NOT NULL,
    subjectCode varchar(30) NOT NULL,
    classCode varchar(30) NOT NULL,

    CONSTRAINT teacherID FOREIGN KEY (ID) REFERENCES teacher(ID),
    FOREIGN KEY (subjectCode) REFERENCES subject(subjectCode),
    FOREIGN KEY (classCode) REFERENCES class(classCode)
);


CREATE TABLE student_class (
    studentID int NOT NULL,
    classCode varchar(30) NOT NULL,

    CONSTRAINT studentID FOREIGN KEY (ID) REFERENCES student(ID),
    FOREIGN KEY (classCode) REFERENCES class(classCode)
)