const Intern = require('../lib/Intern');

describe('Intern', () => {
        it('should create an object with a name, id, email address, role, and school name', () => {
            const intern = new Intern("TestIntern", 123, "test@email.com", "testschool", "Intern")

            expect(intern.name).toEqual("TestIntern");
            expect(intern.id).toEqual(123);
            expect(intern.email).toEqual("test@email.com");
            expect(intern.school).toEqual("testschool");
            expect(intern.role).toEqual("Intern");            
        })
    })