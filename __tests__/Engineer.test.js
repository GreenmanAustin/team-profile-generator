const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.name).toBe('Sam White');
    expect(engineer.id).toBe('01232EM');
    expect(engineer.email).toBe('sam.white@yahoo.com');
    expect(engineer.github).toEqual('greenmanaustin')

})

test("gets engineer's name", () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.getName()).toEqual('Sam White');

})

test("gets engineer's id", () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.getId()).toEqual('01232EM');

})

test("gets engineer's email", () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.getEmail()).toEqual('sam.white@yahoo.com');

})

test("gets engineer's github", () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.getGithub()).toBe('greenmanaustin');

})

test("gets engineer's role", () => {
    const engineer = new Engineer('Sam White', '01232EM', 'sam.white@yahoo.com', 'greenmanaustin');

    expect(engineer.getRole()).toEqual('Engineer');

})
