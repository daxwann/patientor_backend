import patients from '../data/patients';
import { NewPatientEntry, NonSensitivePatient, Patient } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getNonSensitivePatients = ():  Array<NonSensitivePatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatientEntry): NonSensitivePatient => {
  // eslint-disable-next-line
  const newId: string = uuidv4();
  const newPatient: Patient = {
    id: newId,
    ...entry
  };
  patients.push(newPatient);

  return redactSensitiveData(patients[patients.length - 1]);
};

const findPatientById = (id: string): Patient | undefined => {
  const patient: Patient | undefined = patients.find(p => p.id.toLowerCase() === id.toLowerCase());

  return patient;
}; 

const redactSensitiveData = (patient: Patient): NonSensitivePatient => {
  const { id, name, dateOfBirth, gender, occupation } = patient;
  return { id, name, dateOfBirth, gender, occupation };
};

export default {
  getNonSensitivePatients,
  findPatientById,
  addPatient
};