export interface Attendance {
    studentMatricule : string,
    courseCode: string;
    dateSigned : Date;
}

export interface Student {
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
    courseTitle : string;
    courseCode : string;
    openForAttendance : boolean;
}