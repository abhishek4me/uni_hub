import { StateUniversities, Course } from './types';

export const stateUniversities: StateUniversities = {
  Kerala: [
    { name: 'Cochin University of Science and Technology (CUSAT)', location: 'Kochi' },
    { name: 'APJ Abdul Kalam Technological University (KTU)', location: 'Thiruvananthapuram' },
  ],
  'Tamil Nadu': [
    { name: 'Anna University', location: 'Chennai' },
    { name: 'Vellore Institute of Technology (VIT)', location: 'Vellore' },
  ],
  Karnataka: [
    { name: 'Visvesvaraya Technological University (VTU)', location: 'Belagavi' },
    { name: 'Manipal Institute of Technology (MIT)', location: 'Manipal' },
  ],
  Goa: [
    { name: 'BITS Pilani - Goa Campus', location: 'Goa' },
    { name: 'Padre Conceicao College of Engineering', location: 'Goa' },
  ],
  Telangana: [
    { name: 'Jawaharlal Nehru Technological University (JNTU)', location: 'Hyderabad' },
    { name: 'Chaitanya Bharathi Institute of Technology (CBIT)', location: 'Hyderabad' },
  ],
};

export const courses: Course[] = [
  { name: 'Civil Engineering', code: 'CE' },
  { name: 'Mechanical Engineering', code: 'ME' },
  { name: 'Electronics and Electrical Engineering', code: 'EEE' },
  { name: 'Computer Science', code: 'CS' },
  { name: 'Electronics and Communication Engineering', code: 'ECE' },
];

export const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];