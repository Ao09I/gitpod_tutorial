import { greet, sum } from './example';

test('greet returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('sum adds numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});