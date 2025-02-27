import React, { useState } from "react";
import InputField from "./components/InputField";
import StudentCard from "./components/StudentCard";

interface Student {
  name: string;
  age: string;
  gender: string;
  fatherName: string;
  motherName: string;
  course: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<Student>({
    name: "",
    age: "",
    gender: "",
    fatherName: "",
    motherName: "",
    course: "",
  });

  const [student, setStudent] = useState<Student | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStudent(null); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudent(formData); // Set student details when form is submitted
    setFormData({ name: "", age: "", gender: "", fatherName: "", motherName: "", course: "" }); // Clear form fields
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">School Admission Form</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <InputField label="Student Name" type="text" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
          <InputField
            label="Gender"
            type="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />
          <InputField label="Father's Name" type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          <InputField label="Mother's Name" type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
          <InputField
            label="Course"
            type="select"
            name="course"
            value={formData.course}
            onChange={handleChange}
            options={["Science", "Commerce", "Arts", "Computer Science"]}
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            Submit
          </button>
        </form>

      
        {student && (
          <div className="mt-6 w-full">
            <StudentCard student={student} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
