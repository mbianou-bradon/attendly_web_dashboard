export interface Attendance {
    _id: string,
    studentMatriculeNumber : string,
    courseCode: string;
    dateSigned : string;
}

export interface Student {
    _id: string,
    studentMatricule : string;
    studentName: string;
    email : string;
    phoneNumber: string;
    faculty: string;
    department: string;
}

export interface Teacher {
    teacherMatricule : string;
    teacherName : string;
    email: string;
    address: string;
    coursesTaught : string[];
    faculty : string;
}

export interface Course {
    _id : string;
    courseTitle : string;
    courseCode : string;
    openForAttendance : boolean;
}