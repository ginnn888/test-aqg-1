const { add, subtract, divide, isEven, capitalize, fetchUserAsync } = require('./mathUtils');

describe('MathUtils Tests', () => {
  test('add should return sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract should return difference', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('divide should divide correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide should throw error on zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('isEven should return true for even and false for odd', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  });

  test('capitalize should return capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
    expect(capitalize(123)).toBe('');
  });

  test('fetchUserAsync should return user object for valid id', async () => {
    const user = await fetchUserAsync(1);
    expect(user).toEqual({ id: 1, name: 'User1' });
  });

  test('fetchUserAsync should reject for invalid id', async () => {
    await expect(fetchUserAsync(0)).rejects.toThrow('Invalid user id');
  });
});