const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
        it('should create an object with a name, id, email address, role, and github profile', () => {
            const engineer = new Engineer("TestEngineer", 123, "test@email.com", "testgithub", "Engineer")

            expect(engineer.name).toEqual("TestEngineer");
            expect(engineer.id).toEqual(123);
            expect(engineer.email).toEqual("test@email.com");
            expect(engineer.github).toEqual("testgithub");
            expect(engineer.role).toEqual("Engineer");
        })
    })