const request = require('supertest')('http://localhost:3001');

describe('Testing Node js Server ',()=>{


// for this test case we need to provide a uniqe email 

    const data = {
        email:'das@abv.bg',
        password:'oro',
        address:'dsakod sakdo askdoasd',
        city: 'dasd',
        state:'sdkao',
        postal: '1212'
    }

    test('Register with a new user', (done) => {
            request.post('/register').send(data).end((e,response)=>{
                expect(response.statusCode).toBe(200);
                expect(response.body.error).toBe(false);
                expect(response.body.data).toBe('success');
                done();
            });
    });


    test('If use exists give an error', (done) => {
        request.post('/register').send(data).end((e,response)=>{
            expect(response.body.error).toBe(true);
            expect(response.body.data).toBe('');
            done();
        });
    });



    const existingUser = {email:'kasadawa@gmail.com',password:'mitko'}
    test('Login with existing user', (done) => {
        request.post('/login').send(existingUser).end((e,response)=>{
            expect(response.statusCode).toBe(200);
            expect(response.body.error).toBe(false);
            expect(response.body.data).toBe('succeess');
            done();
        });
    });


    const nonExistingUser = {email:'kas12adawa@gmail.com',password:'mitko'}
    test('Login with non-existing user', (done) => {
        request.post('/login').send(nonExistingUser).end((e,response)=>{
            expect(response.body.error).toBe(true);
            expect(response.body.data).toBe('There is no user with this email ');
            done();
        });
    });


    const ExistingUserWrongPass = {email:'kasadawa@gmail.com',password:'mitk1o'}
    test('Login with wrong password', (done) => {
        request.post('/login').send(ExistingUserWrongPass).end((e,response)=>{
            expect(response.body.error).toBe(true);
            expect(response.body.data).toBe('passwords didnt match');
            done();
        });
    });
});

 


