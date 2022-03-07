const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Sam White', '01232EM', 'sam.white@yahoo.com', 'A23');

    expect(manager.name).toBe('Sam White');
    expect(manager.id).toBe('01232EM');
    expect(manager.email).toBe('sam.white@yahoo.com');
    expect(manager.officeNumber).toEqual('A23')

})

test("gets manager's name", () => {
    const manager = new Manager('Sam White', '01232EM', 'sam.white@yahoo.com', 'A23');

    expect(manager.getName()).toEqual('Sam White');

})

test("gets manager's id", () => {
    const manager = new Manager('Sam White', '01232EM', 'sam.white@yahoo.com', 'A23');

    expect(manager.getId()).toEqual('01232EM');

})

test("gets manager's email", () => {
    const manager = new Manager('Sam White', '01232EM', 'sam.white@yahoo.com', 'A23');

    expect(manager.getEmail()).toEqual('sam.white@yahoo.com');

})

test("gets manager's role", () => {
    const manager = new Manager('Sam White', '01232EM', 'sam.white@yahoo.com', 'A23');

    expect(manager.getRole()).toEqual('Manager');

})
