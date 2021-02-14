import diagnoses from '../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = ():  Array<Diagnosis> => {
  return diagnoses;
};

const addDiagnosis = (): null => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnosis
}