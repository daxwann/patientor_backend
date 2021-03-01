import diagnoses from '../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = ():  Array<Diagnosis> => {
  return diagnoses;
};

const findDiagnosisByCode = (code: string): Diagnosis | undefined => {
  return diagnoses.find(d =>  d.code.toLowerCase() === code.toLowerCase());
};

const addDiagnosis = (): null => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnosis,
  findDiagnosisByCode
};