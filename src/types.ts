export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export type Gender = 'male' | 'female';

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  occupation: string;
  ssn: string;
}

export type PatientReqBody = {
  name: unknown,
  dateOfBirth: unknown,
  ssn: unknown,
  occupation: unknown,
  gender: unknown
};

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NewPatientEntry = Omit<Patient, 'id'>;