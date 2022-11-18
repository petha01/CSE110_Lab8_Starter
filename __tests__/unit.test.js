// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone number
test('Test if 619-495-2825 is a phone number', () => {
    expect(functions.isPhoneNumber('619-495-2825')).toBe(true);
});

test('Test if 123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Test if 123-456-789 is not    a phone number', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('Test if 911 is not a phone number', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
});

// Email
test('Test if hell0@gmail.com is an email', () => {
    expect(functions.isEmail('hell0@gmail.com')).toBe(true);
});

test('Test if Hell0@gmail.org is not an email', () => {
    expect(functions.isEmail('Hell0@gmail.org')).toBe(true);
});

test('Test if hell0@gmail is not an email', () => {
    expect(functions.isEmail('hell0@gmail')).toBe(false);
}); 

test('Test if hell0@gmail.commmm is not an email', () => {
    expect(functions.isEmail('hell0@gmail.commmm')).toBe(false);
});

// Password
test('Test if Monkey5 is a strong password', () => {
    expect(functions.isStrongPassword('Monkey5')).toBe(true);
});

test('Test if Monkey__ is a strong password', () => {
    expect(functions.isStrongPassword('Monkey5__')).toBe(true);
});

test('Test if M5 is not a strong password', () => {
    expect(functions.isStrongPassword('M5')).toBe(false);
});

test('Test if 5Monkey5 not is a strong password', () => {
    expect(functions.isStrongPassword('5Monkey5')).toBe(false);
});

// Date
test('Test if 12/12/2001 is a date', () => {
    expect(functions.isDate('12/12/2001')).toBe(true);
});

test('Test if 99/99/9999 is a date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});

test('Test if 12/12/01 is not a date', () => {
    expect(functions.isDate('12/12/01')).toBe(false);
});

test('Test if 99/99/99999 is not a date', () => {
    expect(functions.isDate('99/99/99999')).toBe(false);
});

// Hex color
test('Test if #5c709f is a hex color', () => {
    expect(functions.isHexColor('#5c709f')).toBe(true);
});

test('Test if 39A is a hex color', () => {
    expect(functions.isHexColor('39A')).toBe(true);
});

test('Test if #5c709 is not a hex color', () => {
    expect(functions.isHexColor('#5c709')).toBe(false);
});

test('Test if #5c709g is not a hex color', () => {
    expect(functions.isHexColor('#5c709g')).toBe(false);
});