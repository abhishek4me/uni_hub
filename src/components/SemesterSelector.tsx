import React from 'react';
import { semesters } from '../data';

interface SemesterSelectorProps {
  selectedSemester: string;
  onSemesterChange: (semester: string) => void;
}

export function SemesterSelector({ selectedSemester, onSemesterChange }: SemesterSelectorProps) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Semester</label>
      <div className="grid grid-cols-4 gap-2">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => onSemesterChange(semester)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              selectedSemester === semester
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {semester}
          </button>
        ))}
      </div>
    </div>
  );
}