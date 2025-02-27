import React from "react";

interface Student {
  name: string;
  age: string;
  gender: string;
  fatherName: string;
  motherName: string;
  course: string;
}

const StudentCard: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-black mb-2">Student Details</h2>
      <p className="text-black"><strong>Name:</strong> {student.name}</p>
      <p className="text-black"><strong>Age:</strong> {student.age}</p>
      <p className="text-black"><strong>Gender:</strong> {student.gender}</p>
      <p className="text-black"><strong>Father's Name:</strong> {student.fatherName}</p>
      <p className="text-black"><strong>Mother's Name:</strong> {student.motherName}</p>
      <p className="text-black"><strong>Course:</strong> {student.course}</p>
    </div>
  );
};

export default StudentCard;
