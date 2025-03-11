export interface University {
  name: string;
  location: string;
}

export interface StateUniversities {
  [key: string]: University[];
}

export interface Course {
  name: string;
  code: string;
}

export type Semester = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8';

export interface SyllabusAnalysis {
  title: string;
  university: string;
  course: string;
  semester: string;
  scheme: string;
  subjects: Subject[];
  overview: string;
}

export interface Subject {
  name: string;
  code: string;
  description: string;
  credits: number;
}