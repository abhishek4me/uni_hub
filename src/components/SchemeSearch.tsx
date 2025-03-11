import React from 'react';
import { Search } from 'lucide-react';

interface SchemeSearchProps {
  scheme: string;
  onSchemeChange: (scheme: string) => void;
}

export function SchemeSearch({ scheme, onSchemeChange }: SchemeSearchProps) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">Search Scheme</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Enter scheme year (e.g., 2024)"
          value={scheme}
          onChange={(e) => onSchemeChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}