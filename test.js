const getGreeting = require('./project');
const getIt = require('./project')

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can get it', () => {
  expect(getIt('chick')).toBe('get chick')
})