import React from 'react';
import { SyllabusAnalysis } from '../types';
import { BookOpen, GraduationCap, Calendar, School } from 'lucide-react';

interface SyllabusSummaryProps {
  analysis: SyllabusAnalysis | null;
}

export function SyllabusSummary({ analysis }: SyllabusSummaryProps) {
  if (!analysis) return null;

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-6 w-6 text-white" />
            <h2 className="ml-3 text-xl font-bold text-white">{analysis.title}</h2>
          </div>
          <span className="px-3 py-1 text-sm text-indigo-100 bg-indigo-700 rounded-full">
            {analysis.scheme}
          </span>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <School className="h-5 w-5 text-indigo-500" />
            <span className="ml-2 text-sm text-gray-600">{analysis.university}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-indigo-500" />
            <span className="ml-2 text-sm text-gray-600">{analysis.course}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-indigo-500" />
            <span className="ml-2 text-sm text-gray-600">{analysis.semester}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
          <p className="text-gray-600">{analysis.overview}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subjects</h3>
          <div className="space-y-4">
            {analysis.subjects.map((subject) => (
              <div
                key={subject.code}
                className="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-md font-medium text-gray-900">{subject.name}</h4>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{subject.code}</span>
                    <span className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
                      {subject.credits} Credits
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}