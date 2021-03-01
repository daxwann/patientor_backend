import patients from '../data/patients';
import { NonSensitivePatient } from '../types';

const getNonSensitivePatients = ():  Array<NonSensitivePatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (): null => {
  return null;
};

const findPatientById = (id: string): NonSensitivePatient | undefined => {
  return patients.find(p => p.id.toLowerCase() === id.toLowerCase());
}; 

export default {
  getNonSensitivePatients,
  findPatientById,
  addPatient
};