/**
 * order-utils.js — sample module for testing the Quality Gate Console.
 * Upload this file at http://localhost:3000 and run the gate.
 *
 * It deliberately contains a mix of clean code and problems so the report
 * shows findings across every category (security / logic / coverage).
 */

// --- config -----------------------------------------------------------------

// FINDING: hardcoded credential literal in source
const PAYMENT_API_KEY = "sk_live_9f2Ab7Qz1Kp4Rt8Nx3Wm6Yc0Ld5Hj";

// FINDING: plain-HTTP endpoint (unencrypted)
const PRICING_ENDPOINT = "http://pricing.internal.example.com/v1/rates";

// --- clean, validated helper ---------------------------------------------

/**
 * Adds a line item total. Fully validated + normalises negative zero.
 */
function lineTotal(unitPrice, quantity) {
  if (typeof unitPrice !== "number" || Number.isNaN(unitPrice)) {
    throw new TypeError("unitPrice must be a number");
  }
  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new RangeError("quantity must be a non-negative integer");
  }
  const result = unitPrice * quantity;
  return Object.is(result, -0) ? 0 : result;
}

// --- problem code ------------------------------------------------------

// FINDING: exported API with no input validation
// FINDING: arithmetic result not normalised for -0
function applyDiscount(amount, percent) {
  return amount - (amount * percent) / 100;
}

// FINDING: loose equality (== instead of ===)
function isFreeShipping(orderTotal) {
  return orderTotal == 0 || orderTotal > 100;
}

// FINDING: Math.random() used for a transaction identifier
function newTransactionId() {
  return "txn_" + Math.random().toString(36).slice(2, 12);
}

// FINDING: eval() on caller-supplied input
function evaluatePricingRule(ruleExpression, context) {
  return eval(ruleExpression);
}

module.exports = {
  lineTotal,
  applyDiscount,
  isFreeShipping,
  newTransactionId,
  evaluatePricingRule,
  PRICING_ENDPOINT,
};
