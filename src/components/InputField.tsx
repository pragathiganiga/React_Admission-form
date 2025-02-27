import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-black font-semibold mb-1">{label}</label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
        >
          <option value="" disabled>Select {label}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))} 
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
        />
      )}
    </div>
  );
};

export default InputField;
