import {
  isFridayRushHour,
  calculateSurcharge,
  calculateBulkFee,
  calculateDistanceDeliveryFee,
} from '../lib/deliveryFee';
import { describe } from 'node:test';

// Testing Friday rush hour in year 2023 and 2024.
describe('isFridayRushHour', () => {
  it('should return true if it is Friday between 3pm and 7pm', () => {
    expect(isFridayRushHour('2024-01-05T15:01')).toBe(true);
    expect(isFridayRushHour('2024-01-19T15:00')).toBe(true);
    expect(isFridayRushHour('2023-11-10T18:59')).toBe(true);
  });
  it('should return false if it is not Friday between 3pm and 7pm', () => {
    expect(isFridayRushHour('2023-11-12T14:59')).toBe(false);
    expect(isFridayRushHour('2023-12-14T19:00')).toBe(false);
    expect(isFridayRushHour('2024-01-19T19:01')).toBe(false);
  });
});

// Testing cart value surcharge. Under cart value under 10 triggers the surcharge.
describe('calculateSurcharge', () => {
  it('should return 2 if cartValue is 8', () => {
    expect(calculateSurcharge(8)).toBe(2);
  });
  it('should return 0 if cartValue is greater than 12', () => {
    expect(calculateSurcharge(12)).toBe(0);
  });
});

// Testing bulk fee. If cartItems is greater than 4, bulk fee is applied.
describe('calculateBulkFee', () => {
  it('should return 0 if cartItems is less than 4', () => {
    expect(calculateBulkFee(4)).toBe(0);
  });
  it('should return 1 if cartItems is 6', () => {
    expect(calculateBulkFee(6)).toBe(1);
  });
  it('should return 6.20 if cartItems 14', () => {
    expect(calculateBulkFee(14)).toBe(6.2);
  });
});

// Testing distance delivery fee. If distance is greater than 1000, extra distance fee for every 500m is applied on top of 2€ base fee.
describe('calculateDistanceDeliveryFee', () => {
  it('should return 2 if distance is equal to or less than 1000', () => {
    expect(calculateDistanceDeliveryFee(999)).toBe(2);
  });

  it('should return 3 if the distance is 1001', () => {
    expect(calculateDistanceDeliveryFee(1001)).toBe(3);
  });

  it('should return 5 if the distance is 2001', () => {
    expect(calculateDistanceDeliveryFee(1001)).toBe(3);
  });
});
