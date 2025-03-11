import React, { useState } from 'react';
import { StateSelector } from './components/StateSelector';
import { UniversityList } from './components/UniversityList';
import { SchemeSearch } from './components/SchemeSearch';
import { SemesterSelector } from './components/SemesterSelector';
import { CourseSelector } from './components/CourseSelector';
import { SyllabusSummary } from './components/SyllabusSummary';
import { GraduationCap, Search } from 'lucide-react';
import { SyllabusAnalysis } from './types';
import { stateUniversities } from './data';

function App() {
  const [selectedState, setSelectedState] = useState('');
  const [scheme, setScheme] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [analysis, setAnalysis] = useState<SyllabusAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!selectedState || !scheme || !selectedSemester || !selectedCourse) {
      return;
    }

    try {
      setIsAnalyzing(true);
      const university = selectedState ? stateUniversities[selectedState][0].name : '';
      
      // Here you would implement your own analysis logic
      // This is just a placeholder for demonstration
      const mockAnalysis: SyllabusAnalysis = {
        title: `${selectedCourse} - ${selectedSemester} Syllabus`,
        university,
        course: selectedCourse,
        semester: selectedSemester,
        scheme,
        subjects: [
          {
            name: "Sample Subject 1",
            code: "CS101",
            description: "Introduction to the fundamentals of computer science",
            credits: 3
          },
          {
            name: "Sample Subject 2",
            code: "CS102",
            description: "Advanced programming concepts and algorithms",
            credits: 4
          }
        ],
        overview: "This is a sample overview of the syllabus. Replace this with actual analysis results."
      };
      
      setAnalysis(mockAnalysis);
    } catch (error) {
      console.error('Error analyzing syllabus:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <GraduationCap className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Engineering Syllabus Portal
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Find and analyze engineering syllabi across universities
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          <StateSelector selectedState={selectedState} onStateChange={setSelectedState} />
          <UniversityList selectedState={selectedState} />
          <SchemeSearch scheme={scheme} onSchemeChange={setScheme} />
          <SemesterSelector
            selectedSemester={selectedSemester}
            onSemesterChange={setSelectedSemester}
          />
          <CourseSelector selectedCourse={selectedCourse} onCourseChange={setSelectedCourse} />
          
          <div className="pt-4">
            <button
              onClick={handleAnalyze}
              disabled={!selectedState || !scheme || !selectedSemester || !selectedCourse || isAnalyzing}
              className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white 
                ${isAnalyzing || !selectedState || !scheme || !selectedSemester || !selectedCourse
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Analyze Syllabus
                </>
              )}
            </button>
          </div>
        </div>

        <SyllabusSummary analysis={analysis} />
      </div>
    </div>
  );
}

export default App;