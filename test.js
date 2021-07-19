const functions = require('./project');


let {sayHi, getGreeting} = functions

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('say hello', () => {
  expect(sayHi('jeff')).toBe("hello, jeff")
})