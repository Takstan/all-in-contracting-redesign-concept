import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateLeadForm,
  calculateFeasibilityEstimate,
  generateDiscoverySlots,
  formatCurrencyCAD,
  LeadFormData,
} from './contractingLogic';

test('validateLeadForm rejects empty or invalid forms', () => {
  const invalidData: LeadFormData = {
    fullName: '',
    email: 'bad-email',
    phone: '123',
    projectType: '',
    location: '',
    timeline: '',
    budgetRange: '',
    notes: '',
  };

  const result = validateLeadForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.projectType);
  assert.ok(result.errors.location);
  assert.ok(result.errors.budgetRange);
});

test('validateLeadForm passes with complete, valid data', () => {
  const validData: LeadFormData = {
    fullName: 'Sarah Jenkins',
    email: 'sarah.j@gmail.com',
    phone: '250-555-0192',
    projectType: 'kitchen',
    location: 'Kelowna',
    timeline: 'Within 3 months',
    budgetRange: '$50,000 - $100,000',
    notes: 'Looking to remodel main kitchen and knock down non-load-bearing wall.',
  };

  const result = validateLeadForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateFeasibilityEstimate scales correctly with tier', () => {
  const essentialKitchen = calculateFeasibilityEstimate('kitchen', 'essential');
  const luxuryKitchen = calculateFeasibilityEstimate('kitchen', 'luxury');

  assert.ok(essentialKitchen.lowEstimate < luxuryKitchen.lowEstimate);
  assert.ok(essentialKitchen.highEstimate < luxuryKitchen.highEstimate);
  assert.equal(typeof essentialKitchen.title, 'string');
  assert.ok(essentialKitchen.typicalMilestones.length > 0);
});

test('generateDiscoverySlots produces non-empty weekday slots', () => {
  const baseDate = new Date('2026-10-21T10:00:00Z'); // A Wednesday
  const slots = generateDiscoverySlots(baseDate);

  assert.ok(slots.length >= 6);
  for (const slot of slots) {
    assert.ok(slot.id);
    assert.ok(slot.formattedDate);
    assert.ok(slot.time);
  }
});

test('formatCurrencyCAD formats correctly in CAD format', () => {
  const formatted = formatCurrencyCAD(75000);
  assert.ok(formatted.includes('75,000'));
});
