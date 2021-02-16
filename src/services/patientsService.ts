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

export default {
  getNonSensitivePatients,
  addPatient
};