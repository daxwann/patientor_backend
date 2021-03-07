import express from 'express';
import patientsService from '../services/patientsService';
import { NewPatientEntry, NonSensitivePatient, PatientReqBody } from '../types';
import { validateNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatients());
});

router.get('/:id', (req, res) => {
  const patient = patientsService.findPatientById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry: NewPatientEntry = validateNewPatientEntry(req.body as PatientReqBody);
    const addedPatient: NonSensitivePatient = patientsService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

export default router;
