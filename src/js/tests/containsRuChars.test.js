import containsRuChars from '../containsRuChars';

test('contains Ы char', () => {
  expect(containsRuChars('Фильм "Операция «Ы»')).toBeTruthy();
});
