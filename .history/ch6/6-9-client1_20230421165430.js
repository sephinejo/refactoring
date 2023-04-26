import { acquireReading } from './6-9.js';

const reading = acquireReading();

const baseCharge = baseRate(reading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);
