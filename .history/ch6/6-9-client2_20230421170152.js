import { acquireReading } from './6-9.js';

const reading = acquireReading();
const base = baseRate(reading.month, reading.year) * reading.quantity;
