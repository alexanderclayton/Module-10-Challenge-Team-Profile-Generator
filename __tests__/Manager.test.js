const Manager = require('../lib/Manager');

describe('Intern', () => {
        it('should create an object with a name, id, email address, role, and office number', () => {
            const manager = new Manager("TestManager", 123, "test@email.com", 1234, "Manager")

            expect(manager.name).toEqual("TestManager");
            expect(manager.id).toEqual(123);
            expect(manager.email).toEqual("test@email.com");
            expect(manager.officeNumber).toEqual(1234);
            expect(manager.role).toEqual("Manager");
        })
})        