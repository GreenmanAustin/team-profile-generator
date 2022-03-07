const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.name).toBe('Sam White');
    expect(intern.id).toBe('01232EM');
    expect(intern.email).toBe('sam.white@yahoo.com');
    expect(intern.school).toBe('Berkeley')

})

test("gets intern's name", () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.getName()).toEqual('Sam White');

})

test("gets intern's id", () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.getId()).toEqual('01232EM');

})

test("gets intern's email", () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.getEmail()).toEqual('sam.white@yahoo.com');

})

test("gets intern's school", () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.getSchool()).toBe('Berkeley');

})

test("gets intern's role", () => {
    const intern = new Intern('Sam White', '01232EM', 'sam.white@yahoo.com', 'Berkeley');

    expect(intern.getRole()).toEqual('Intern');

})