import React from 'react';
import { stateUniversities } from '../data';
import { Building2 } from 'lucide-react';

interface UniversityListProps {
  selectedState: string;
}

export function UniversityList({ selectedState }: UniversityListProps) {
  const universities = stateUniversities[selectedState] || [];

  if (!selectedState) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Universities in {selectedState}</h3>
      <div className="space-y-3">
        {universities.map((university) => (
          <div
            key={university.name}
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-indigo-500 transition-colors"
          >
            <Building2 className="h-5 w-5 text-indigo-600 mr-3" />
            <div>
              <h4 className="text-sm font-medium text-gray-900">{university.name}</h4>
              <p className="text-sm text-gray-500">{university.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}