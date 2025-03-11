import * as pdfjsLib from 'pdfjs-dist';
import { SyllabusAnalysis } from '../types';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function analyzePDF(
  file: File,
  university: string,
  course: string,
  semester: string,
  scheme: string
): Promise<SyllabusAnalysis> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  
  let fullText = '';
  
  // Extract text from all pages
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item: any) => item.str)
      .join(' ');
    fullText += pageText + '\n';
  }

  // Extract subjects (this is a simple example - you'd want more sophisticated parsing)
  const subjects = extractSubjects(fullText);
  
  return {
    title: `${course} - ${semester} Syllabus`,
    university,
    course,
    semester,
    scheme,
    subjects,
    overview: generateOverview(fullText),
  };
}

function extractSubjects(text: string): any[] {
  // This is a simplified example - you'd want more sophisticated parsing
  const subjectPattern = /([A-Z]{2,}\d{3,})\s*[-:]\s*([^(\n]+)(?:\((\d+)\s*credits?\))?/gi;
  const subjects = [];
  let match;

  while ((match = subjectPattern.exec(text)) !== null) {
    subjects.push({
      code: match[1],
      name: match[2].trim(),
      description: extractDescription(text, match[0]),
      credits: parseInt(match[3] || '3', 10),
    });
  }

  return subjects;
}

function extractDescription(text: string, subjectHeader: string): string {
  const startIndex = text.indexOf(subjectHeader) + subjectHeader.length;
  const nextSubjectIndex = text.indexOf('Course Objectives', startIndex);
  
  if (nextSubjectIndex === -1) {
    return "Description not available";
  }
  
  return text
    .substring(startIndex, nextSubjectIndex)
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 200) + '...';
}

function generateOverview(text: string): string {
  // Extract first paragraph or relevant section
  const overview = text.split('\n')
    .filter(line => line.trim().length > 50)
    .slice(0, 2)
    .join('\n');
    
  return overview || 'Overview not available';
}