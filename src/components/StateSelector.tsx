import React from 'react';
import { stateUniversities } from '../data';
import { ChevronDown } from 'lucide-react';

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export function StateSelector({ selectedState, onStateChange }: StateSelectorProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Select State</label>
      <div className="relative">
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md appearance-none bg-white"
        >
          <option value="">Select a state</option>
          {Object.keys(stateUniversities).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}