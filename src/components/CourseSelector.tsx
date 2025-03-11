import React from 'react';
import { courses } from '../data';
import { BookOpen } from 'lucide-react';

interface CourseSelectorProps {
  selectedCourse: string;
  onCourseChange: (course: string) => void;
}

export function CourseSelector({ selectedCourse, onCourseChange }: CourseSelectorProps) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
      <div className="grid grid-cols-1 gap-3">
        {courses.map((course) => (
          <button
            key={course.code}
            onClick={() => onCourseChange(course.name)}
            className={`flex items-center p-3 rounded-lg border ${
              selectedCourse === course.name
                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{course.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}