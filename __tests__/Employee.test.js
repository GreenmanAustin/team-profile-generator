const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Sam White', '01232EM', 'sam.white@yahoo.com');

    expect(employee.name).toBe('Sam White');
    expect(employee.id).toBe('01232EM');
    expect(employee.email).toBe('sam.white@yahoo.com');

})

test("gets employee's name", () => {
    const employee = new Employee('Sam White', '01232EM', 'sam.white@yahoo.com');

    expect(employee.getName()).toEqual('Sam White');

})

test("gets employee's id", () => {
    const employee = new Employee('Sam White', '01232EM', 'sam.white@yahoo.com');

    expect(employee.getId()).toEqual('01232EM');

})

test("gets employee's email", () => {
    const employee = new Employee('Sam White', '01232EM', 'sam.white@yahoo.com');

    expect(employee.getEmail()).toEqual('sam.white@yahoo.com');

})

test("gets employee's role", () => {
    const employee = new Employee('Sam White', '01232EM', 'sam.white@yahoo.com');

    expect(employee.getRole()).toEqual('Employee');

})
