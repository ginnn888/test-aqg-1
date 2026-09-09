const {
  add,
  multiply,
  clamp,
  subtract,
  divide,
  isEven,
  capitalize,
  fetchUserAsync,
} = require('../src/sample-to-check');

describe('mathUtils Library Tests', () => {
  
  describe('add', () => {
    test('should correctly add two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, -1)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should correctly multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two numbers', () => {
      expect(subtract(10, 5)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('divide', () => {
    test('should correctly divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('clamp', () => {
    test('should return the value if within range', () => {
      expect(clamp(5, 1, 10)).toBe(5);
    });

    test('should return min if value is less than min', () => {
      expect(clamp(0, 1, 10)).toBe(1);
    });

    test('should return max if value is greater than max', () => {
      expect(clamp(15, 1, 10)).toBe(10);
    });
  });

  describe('isEven', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
    });
  });

  describe('capitalize', () => {
    test('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should return empty string for non-string input', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(123)).toBe('');
    });

    test('should return empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('fetchUserAsync', () => {
    test('should resolve with user object for valid id', async () => {
      const user = await fetchUserAsync(1);
      expect(user).toEqual({ id: 1, name: 'User1' });
    });

    test('should reject for invalid id', async () => {
      await expect(fetchUserAsync(0)).rejects.toThrow('Invalid user id');
      await expect(fetchUserAsync(-1)).rejects.toThrow('Invalid user id');
    });
  });
});