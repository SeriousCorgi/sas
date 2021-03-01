CREATE TABLE teachers (
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    
    PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE students(
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,

    PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE subjects (
    ID int NOT NULL AUTO_INCREMENT,
    subjectCode varchar(30) NOT NULL UNIQUE,
    name varchar(255) NOT NULL,

    PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE classes (
    ID int NOT NULL AUTO_INCREMENT,
    classCode varchar(30) NOT NULL UNIQUE,
    name varchar(255) NOT NULL,

    PRIMARY KEY (ID)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/* Relationship tables */
CREATE TABLE teacher_subject_class (
    ID int NOT NULL AUTO_INCREMENT,
    teacherID int NOT NULL,
    subjectCode varchar(30) NOT NULL,
    subjectName varchar(255) NOT NULL,
    classCode varchar(30) NOT NULL,

    PRIMARY KEY (ID),
    FOREIGN KEY (teacherID) REFERENCES teachers (ID),
    FOREIGN KEY (subjectCode) REFERENCES subjects (subjectCode),
    FOREIGN KEY (classCode) REFERENCES classes (classCode)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE student_class (
    ID int NOT NULL AUTO_INCREMENT,
    studentID int NOT NULL,
    classCode varchar(30) NOT NULL,

    PRIMARY KEY (ID),
    FOREIGN KEY (studentID) REFERENCES students (ID),
    FOREIGN KEY (classCode) REFERENCES classes (classCode)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


/* Index */
CREATE UNIQUE INDEX tsc_uniq ON teacher_subject_class (teacherID,subjectCode,classCode);
CREATE UNIQUE INDEX sc_uniq ON student_class (studentID,classCode);