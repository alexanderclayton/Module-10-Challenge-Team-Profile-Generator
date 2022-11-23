const Employee = require('../lib/Employee');

describe('Employee', () => {
        it('should create an object with a name, id, email address, and role', () => {
            const employee = new Employee("TestEmployee", 123, "test@email.com", "Employee")

            expect(employee.name).toEqual("TestEmployee");
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual("test@email.com");
            expect(employee.role).toEqual("Employee");
        })
    })